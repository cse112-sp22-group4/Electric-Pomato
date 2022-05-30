/**
 * @file Creates a custom element for the tomato slider to estimate the number of pomodoros.
 * @author Andy Young
 * @author Arman Mansourian
 * @author Luke Menezes
 * @author Liam Stone
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

    this.keysPressed = {};

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

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
    console.log(this.keysPressed);
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
      console.log('Mac check');
      if (this.keysPressed.Alt && this.keysPressed.ArrowLeft && !e.repeat) {
        this.input.value = Math.max(this.input.value - 1, 1);
        this.colorTomatos(this.input.value, 'red');
      }
      if (this.keysPressed.Alt && this.keysPressed.ArrowRight && !e.repeat) {
        this.input.value = Math.min((Number(this.input.value) + 1), 5);
        this.colorTomatos(this.input.value, 'red');
      }
    }
    // if (this.keysPressed.Control && this.keysPressed.ArrowLeft && !e.repeat) {
    //   this.input.value = Math.max(this.input.value - 1, 1);
    //   this.colorTomatos(this.input.value, 'red');
    // }
    // if (this.keysPressed.Control && this.keysPressed.ArrowRight && !e.repeat) {
    //   this.input.value = Math.min((Number(this.input.value) + 1), 5);
    //   this.colorTomatos(this.input.value, 'red');
    // }
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
