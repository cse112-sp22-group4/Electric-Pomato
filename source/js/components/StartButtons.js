/**
 * @file Creates a custom element for the buttons to start the timer session.
 * @author Andy Young
 * @author Justin Lee
 * @author Xingyu Zhu
 */

import TaskList from '../classes/TaskList.js';
import PopUp from '../classes/PopUp.js';
import * as backend from '../backend.js';
/**
 * Constructs the HTML for the start buttons
 * @extends HTMLElement
 */
class StartButtons extends HTMLElement {
  /**
  * constructor for StartButtons
  */
  constructor() {
    super();
    this.classList.add('row');
    const taskList = new TaskList();
    if (taskList.todo.length > 0 || taskList.completed.length > 0) {
      const topContainer = StartButtons.createButtonContainer();
      topContainer.classList.add('mt-12', 'mt-xxl-12');
      topContainer.style.marginBottom = '10px';
      const bottomContainer = StartButtons.createButtonContainer();
      this.appendChild(topContainer);
      this.appendChild(bottomContainer);
      topContainer.appendChild(StartButtons.createButton());
      bottomContainer.appendChild(StartButtons.createAnchor());
    } else {
      // create new button container and centers the create new session button
      const centerContainer = StartButtons.createButtonContainer();
      this.appendChild(centerContainer);
      centerContainer.appendChild(StartButtons.createButton());
    }
  }

  /* <div class="col-12 col-lg-6"></div> */
  /**
   * Creates and returns a styled button container
   * @returns a button container
   */
  static createButtonContainer() {
    const div = document.createElement('div');
    div.classList.add('col-12', 'col-xxl-12');
    return div;
  }

  /**
   * Create a HTML object for the 'Create Session' button.
   * <button type="button" class="btn btn-secondary btn-lg">Create New Session</button>
   * @returns a styled button element that conditionally shows a popup
   */
  static createButton() {
    const button = document.createElement('button');
    const text = document.createTextNode('Create New Session');
    button.classList.add('btn', 'btn-success', 'btn-lg', 'btn-block');
    button.appendChild(text);

    button.addEventListener('click', () => {
      const tasklist = new TaskList();
      if (tasklist.todo.length > 0) {
        const warning = {
          title: 'You already have an existing session, creating a new one will overwrite it!',
          subtitle: 'Continue anyway?',
          leftButton: 'Yes',
          rightButton: 'No',
        };

        PopUp.prompt(warning, true).then((result) => {
          if (result === 'left') {
            backend.clearSessionData();
            window.location.href = './app.html';
          } else if (result === 'right') {
            PopUp.hide();
          }
        });
      } else {
        window.location.href = './app.html';
      }
    });

    return button;
  }

  /**
   * <button type="button" class="btn btn-secondary btn-lg">Returning User</button>
   * @returns an HTML object for the 'Returning User' button.
   */
  static createAnchor() {
    const a = document.createElement('a');
    const text = document.createTextNode('Resume My Session');
    a.href = 'app.html';
    a.classList.add('btn', 'btn-secondary', 'btn-lg', 'btn-block');
    a.appendChild(text);

    a.addEventListener('click', () => {
      // Reset Timer state and current Pomos if session already started
      if (backend.get('Started') === 'true') {
        backend.set('Timer', true);
        backend.set('CurrentPomos', 0);
      }
    });

    return a;
  }
}

customElements.define('start-buttons', StartButtons);
export default StartButtons;
