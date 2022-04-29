/**
 * @file Creates and defines the ViewOnlyTaskList custom HTLMElement.
 * @author Andy Young
 * @author Annika Hatcher
 * @author Liam Stone
 * Date: 03/04/2021
 */

import TaskList from '../classes/TaskList.js';
import ViewOnlyTaskListSection from './ViewOnlyTaskListSection.js';

/**
 * Defines the ViewOnlyTaskList and its helper functions.
 * @extends HTMLElements
 */
class ViewOnlyTaskList extends HTMLElement {
  /**
  * constructor for ViewOnlyTaskList
  */
  constructor() {
    super();

    this.data = new TaskList();

    this.appContainer = document.querySelector('.app-container');
    this.appHeader = document.querySelector('.app-header');
    this.visible = false;

    this.taskListTitle = document.createElement('h2');
    this.taskListTitle.classList.add('subtitle', 'text-center', 'mt-2', 'mb-2');

    this.taskListContainer = document.createElement('div');
    this.taskListContainer.classList.add('task-list-container');

    this.appendChild(this.taskListTitle);
    this.appendChild(this.taskListContainer);

    this.taskListTitle.addEventListener('click', () => {
      this.visible = !this.visible;
      this.position();
    });

    window.addEventListener('resize', () => {
      this.position();
    });

    this.render();
  }

  /**
   * Callback function.
   */
  connectedCallback() {
    this.position();
  }

  /**
   * Render the tasks as 'Completed' or 'To Do'.
   */
  render() {
    while (this.taskListContainer.firstChild) {
      this.taskListContainer.removeChild(this.taskListContainer.firstChild);
    }

    this.taskListContainer.appendChild(new ViewOnlyTaskListSection('To Do', this.data.todo));
    if (this.data.completed.length > 0) {
      this.taskListContainer.appendChild(new ViewOnlyTaskListSection('Completed', this.data.completed));
    }
  }

  /**
   * Update the position.
   */
  position() {
    if (this.visible) {
      this.taskListTitle.innerHTML = '<i class="fas fa-chevron-down"></i>';
      this.style.top = `${this.appHeader.offsetHeight}px`;
    } else {
      this.taskListTitle.innerHTML = '<i class="fas fa-chevron-up"></i>';
      this.style.top = `${this.appContainer.offsetHeight - (this.querySelector('.task-list-container').getBoundingClientRect().top - this.getBoundingClientRect().top)}px`;
    }
  }

  /**
   * Increase the actual number of pomos for the current task.
   */
  addPomo() {
    this.data.addPomo();
    this.render();
  }

  /**
   * Move the current task into completed.
   */
  finishTask() {
    this.data.finishTask();
    this.render();
  }
}

customElements.define('view-only-task-list', ViewOnlyTaskList);
export default ViewOnlyTaskList;
