/**
 * @file Creates a custom element for the tomato slider to estimate the number of pomodoros.
 * @author Andy Young
 * @author Arman Mansourian
 * @author Luke Menezes
 * @author Liam Stone
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

    this.svgUrls = svgIcons[backend.get('Icon')].urls;
    this.svgClasses = svgIcons[backend.get('Icon')].classes;
    // Create template and append to tomato-slider (need to maintain input child)
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="d-flex justify-content-between align-items-center slider-tomato-container">
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

    this.keysPressed = {};

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'disabled') {
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
   * @param {string} color - the class name to determine the fill of the selected tomatoes.
   */
  colorTomatos(n, color) {
    this.tomatos.forEach((tomato, i) => {
      if (i !== 0 && i < n) {
        tomato.classList.value = color;
      } else {
        // eslint-disable-next-line prefer-destructuring
        tomato.classList.value = this.svgClasses[0];
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
      if (icon.getAttribute('id') === '0') {
        icon.setAttribute('data', this.svgUrls[1]);
      } else {
        icon.setAttribute('data', this.svgUrls[0]);
      }
      icon.addEventListener('load', () => {
        const svgDoc = icon.contentDocument;
        this.tomatos[icon.getAttribute('id')] = svgDoc.querySelector('.slider-tomato > g');
        // Color one tomato by default
        // if (icon.getAttribute('id') === '0') {
        //   // eslint-disable-next-line prefer-destructuring
        //   svgDoc.querySelector('.slider-tomato > g').classList.value = this.svgClasses[1];
        // }
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
    this.colorTomatos(Number(this.input.value), this.svgClasses[1]);
  }

  /**
   * Fill in the tomatoes in the slider as the mouse hovers over them.
   * @param {MouseEvent} e
   */
  handleMouseMove(e) {
    const { left, right } = this.querySelector('.slider-tomato-container').getBoundingClientRect();
    const n = Math.min(Math.max(Math.ceil((e.clientX - left) / ((right - left) / 5)), 1), 5);
    this.colorTomatos(n, this.svgClasses[1]);
  }

  /**
   * Change the number of tomatoes in the current slider with Ctr+LeftArrow and Ctr+RightArrow
   * @param {KeyboardEvent} e
   */
  handleKeyDown(e) {
    let os = 'default';
    if (navigator.userAgent.indexOf('Win') !== -1) {
      os = 'Windows';
    } else if (navigator.userAgent.indexOf('Mac') !== -1) {
      os = 'Mac';
    }
    this.keysPressed[e.key] = true;
    if (os === 'Windows') {
      if (this.keysPressed.Control && this.keysPressed.ArrowLeft && !e.repeat) {
        this.input.value = Math.max(this.input.value - 1, 1);
        this.colorTomatos(this.input.value, 'red');
      }
      if (this.keysPressed.Control && this.keysPressed.ArrowRight && !e.repeat) {
        this.input.value = Math.min((Number(this.input.value) + 1), 5);
        this.colorTomatos(this.input.value, 'red');
      }
    } else if (os === 'Mac') {
      if (this.keysPressed.Alt && this.keysPressed.ArrowLeft && !e.repeat) {
        this.input.value = Math.max(this.input.value - 1, 1);
        this.colorTomatos(this.input.value, 'red');
      }
      if (this.keysPressed.Alt && this.keysPressed.ArrowRight && !e.repeat) {
        this.input.value = Math.min((Number(this.input.value) + 1), 5);
        this.colorTomatos(this.input.value, 'red');
      }
    }
  }

  /**
   * Clear the keys pressed during handleKeyUp from the keys dictionary
   * @param {KeyboardEvent} e
   */
  handleKeyUp(e) {
    delete this.keysPressed[e.key];
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
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  /**
   * Remove event listeners once the task edit is finished.
   */
  defaultMode() {
    this.render();

    this.container.style.cursor = 'default';

    this.container.removeEventListener('click', this.handleClick);
    this.container.removeEventListener('mouseleave', this.handleMouseLeave);
    this.container.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }
}

customElements.define('tomato-slider', TomatoSlider);
