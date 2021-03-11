/**
 * @file Creates a custom element to display the current year used for dynamic copyright years.
 * @author Andy Young
 * @author Arman Mansourian
 */

/**
 * Appends a text element containing the current year from a Date() object.
 * @extends HTMLElement
 */
class TomatoSlider extends HTMLElement {
  /**
   * Create the HTML text element and append.
   */
  constructor() {
    super();
    this.appendChild(document.querySelector('#tomato-slider-template').content.cloneNode(true));

    this.input = this.firstElementChild;
    this.container = this.lastElementChild;
    this.tomatos = this.querySelectorAll('.slider-tomato > g');

    this.input.style.display = 'none';

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    const observer = new MutationObserver((mutations) => {
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

  connectedCallback() {
    this.updateState();
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName] = newVal;
  }

  updateState() {
    if (this.input.disabled) {
      this.defaultMode();
    } else {
      this.editMode();
    }
  }

  colorTomatos(n, color) {
    this.tomatos.forEach((tomato, i) => {
      if (i < n) {
        tomato.classList.value = `${color}-tomato`;
      } else {
        tomato.classList.value = 'white-tomato';
      }
    });
  }

  handleClick(e) {
    const { left, right } = document.querySelector('.slider-tomato-container').getBoundingClientRect();
    this.input.value = Math.min(Math.ceil((e.clientX - left + 1) / ((right - left) / 5)), 5);
  }

  handleMouseLeave() {
    this.colorTomatos(Number(this.input.value), 'red');
  }

  handleMouseMove(e) {
    const { left, right } = document.querySelector('.slider-tomato-container').getBoundingClientRect();
    const n = Math.min(Math.max(Math.ceil((e.clientX - left) / ((right - left) / 5)), 1), 5);
    this.colorTomatos(n, 'red');
  }

  editMode() {
    this.colorTomatos(Number(this.input.value), 'red');

    this.container.style.cursor = 'pointer';

    this.container.addEventListener('click', this.handleClick);
    this.container.addEventListener('mouseleave', this.handleMouseLeave);
    this.container.addEventListener('mousemove', this.handleMouseMove);
  }

  defaultMode() {
    this.colorTomatos(Number(this.input.value), 'green');

    this.container.style.cursor = 'default';

    this.container.removeEventListener('click', this.handleClick);
    this.container.removeEventListener('mouseleave', this.handleMouseLeave);
    this.container.removeEventListener('mousemove', this.handleMouseMove);
  }
}

customElements.define('tomato-slider', TomatoSlider);
