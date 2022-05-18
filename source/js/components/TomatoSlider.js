/**
 * @file Creates a custom element for the tomato slider to estimate the number of pomodoros.
 * @author Andy Young
 * @author Arman Mansourian
 */

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

    const keysPressed = {};

    window.addEventListener('keydown', (e) => {
      keysPressed[e.key] = true;
      if (keysPressed.Shift && e.key === '!') {
        this.input.value = 1;
        this.colorTomatos(1, 'red');
      }
      if (keysPressed.Shift && e.key === '@') {
        this.input.value = 2;
        this.colorTomatos(2, 'red');
      }
      if (keysPressed.Shift && e.key === '#') {
        this.input.value = 3;
        this.colorTomatos(3, 'red');
      }
      if (keysPressed.Shift && e.key === '$') {
        this.input.value = 4;
        this.colorTomatos(4, 'red');
      }
      if (keysPressed.Shift && e.key === '%') {
        this.input.value = 5;
        this.colorTomatos(5, 'red');
      }
    });

    document.addEventListener('keyup', (e) => {
      delete keysPressed[e.key];
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
    if (this.input.disabled) {
      this.colorTomatos(Number(this.input.value), 'green');
    } else {
      this.colorTomatos(Number(this.input.value), 'red');
    }
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
