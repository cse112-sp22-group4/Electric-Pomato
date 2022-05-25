/**
 * @file Creates a custom element for the tomato slider to estimate the number of pomodoros.
 * @author Andy Young
 * @author Arman Mansourian
 */

// Need the imports because of parcel
import svgIcons from '../constants/themeIcons.js';
import * as backend from '../backend.js';

/**
 * Constructs the HTML for the slider.
 * @extends HTMLElement
 */
class TomatoSlider extends HTMLElement {
  /**
   * Create the HTML text element and append.
   */
  constructor() {
    super();

    this.svgUrls = svgIcons[backend.get('Theme')].urls;
    this.svgClasses = svgIcons[backend.get('Theme')].classes;
    // Create template and append to tomato-slider (need to maintain input child)
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="d-flex h-100 justify-content-between align-items-center slider-tomato-container">
        <object id=0 class="slider-tomato" type="image/svg+xml" data=""></object>
        <object id=1 class="slider-tomato" type="image/svg+xml" data=""></object>
        <object id=2 class="slider-tomato" type="image/svg+xml" data=""></object>
        <object id=3 class="slider-tomato" type="image/svg+xml" data=""></object>
        <object id=4 class="slider-tomato" type="image/svg+xml" data=""></object>
      </div>
    `;
    this.appendChild(template.content.cloneNode(true));

    this.input = this.firstElementChild;
    this.container = this.lastElementChild;

    this.input.style.display = 'none';

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    const observer = new MutationObserver((mutations) => {
      console.log(mutations);
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'disabled') {
          console.log('disabled mutation');
          this.updateState();
        }
      });
    });

    observer.observe(this.input, {
      attributes: true,
    });
  }

  /**
   * Callback to update state of slider.
   */
  connectedCallback() {
    this.updateState();
  }

  /**
   * Updates event listeners depending on if the task has been entered.
   */
  updateState() {
    if (this.input.disabled) {
      this.defaultMode();
    } else {
      this.editMode();
    }
  }

  /**
   *
   * @param {number} n - the number of tomatoes (pomodoro sessions) selected.
   * @param {string} color - string for the color to fill the number of selected tomatoes.
   */
  colorTomatos(n, color) {
    this.tomatos.forEach((tomato, i) => {
      if (i < n) {
        tomato.classList.value = `${color}-tomato`;
      } else {
        tomato.classList.value = 'white-tomato';
      }
    });
  }

  /**
   * Fill the slider with the tomatoes selected.
   */
  render() {
    // Color green if input is disabled
    if (this.input.disabled) {
      this.querySelectorAll('.slider-tomato').forEach((object, i) => {
        if (i < this.input.value) {
          object.setAttribute('data', this.svgUrls[1]);
        } else {
          object.setAttribute('data', this.svgUrls[0]);
        }
      });
      return;
    }

    // Wait for all svg's to load and then populate this.tomatos
    this.tomatos = [];
    this.querySelectorAll('.slider-tomato').forEach((icon) => {
      // Set to blank icon
      icon.setAttribute('data', this.svgUrls[0]);
      icon.addEventListener('load', () => {
        const svgDoc = icon.contentDocument;
        this.tomatos[icon.getAttribute('id')] = svgDoc.querySelector('.slider-tomato > g');
        // Color one tomato by default
        if (icon.getAttribute('id') === '0') {
          // eslint-disable-next-line prefer-destructuring
          svgDoc.querySelector('.slider-tomato > g').classList.value = this.svgClasses[1];
        }
      });
    });
  }

  /**
   * Sets the value for the number of tomatoes selected when the slider is clicked.
   * @param {MouseEvent} e
   */
  handleClick(e) {
    const { left, right } = this.querySelector('.slider-tomato-container').getBoundingClientRect();
    this.input.value = Math.min(Math.ceil((e.clientX - left + 1) / ((right - left) / 5)), 5);
  }

  /**
   * Color the slider with the value set when the mouse leaves.
   */
  handleMouseLeave() {
    this.colorTomatos(Number(this.input.value), 'red');
  }

  /**
   * Fill in the tomatoes in the slider as the mouse hovers over them.
   * @param {MouseEvent} e
   */
  handleMouseMove(e) {
    const { left, right } = this.querySelector('.slider-tomato-container').getBoundingClientRect();
    const n = Math.min(Math.max(Math.ceil((e.clientX - left) / ((right - left) / 5)), 1), 5);
    this.colorTomatos(n, 'red');
  }

  /**
   * Add event listeners when currently editing a task.
   */
  editMode() {
    this.render();

    this.container.style.cursor = 'pointer';

    this.container.addEventListener('click', this.handleClick);
    this.container.addEventListener('mouseleave', this.handleMouseLeave);
    this.container.addEventListener('mousemove', this.handleMouseMove);
  }

  /**
   * Remove event listeners once the task is entered.
   */
  defaultMode() {
    this.render();

    this.container.style.cursor = 'default';

    this.container.removeEventListener('click', this.handleClick);
    this.container.removeEventListener('mouseleave', this.handleMouseLeave);
    this.container.removeEventListener('mousemove', this.handleMouseMove);
  }
}

customElements.define('tomato-slider', TomatoSlider);