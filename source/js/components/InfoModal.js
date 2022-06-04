/**
 * @file Creates and defines the functionality for the info modal.
 * @author Steven Harris
 * @author Alan Wang
 * @author Meshach Adoe
 * Date: 05/11/2022
 */

import CreateTaskListImage from '../../img/create-task-list.png';
import CreateTaskListMobileImage from '../../img/create-task-list-mobile.png';
import ViewableTaskListImage from '../../img/viewable-task-list.png';
import ViewableTaskListMobileImage from '../../img/viewable-task-list-mobile.png';
import StatsModalImage from '../../img/stats-modal.png';
import StatsMobileImage from '../../img/stats-modal-mobile.png';
import SettingsModal from '../../img/settings-modal.png';
import GreenTomato from '../../img/tomGreen.svg';
import RedTomato from '../../img/tomRed.svg';

/**
 * Defines the Info class which controls opening and closing the info modal.
 */

class InfoModal extends HTMLElement {
  /**
  * Updates the HTML and adds event listeners
  */
  constructor() {
    super();
    this.innerHTML = `
    <div id="info-wrapper" class="modal-wrapper">
      <div class="container">
        <div id="info-content" class="modal-content">
          <div id="info-cards">
            <div class="card">
              <div class="card-body">
                <div>
                  <h2 class="card-title">Plan</h2>
                  <p class="card-text">Create a list of tasks that you would like to complete this session!</p>
                </div>
                <div class="card-description">
                  <img class="desktop-image" src=${CreateTaskListImage} alt="Create Task List View"/>
                  <img class="mobile-image" src=${CreateTaskListMobileImage} alt="Create Task List View"/>
                  <p>Each task asks for a name, and the estimated Pomodoros that will be needed (1-5). Once you've finished making your tasks, start your session!</p>
                </div>
              </div>
              <p class="card-endnote">Don't know what a Pomodoro is? A Pomodoro is an aspect of the Pomodoro Technique. The technique pushes the user to work on tasks in 25 minute chunks (Pomodoro) with breaks between, and long breaks after 4 Pomodoros.</p>
            </div>
            <div class="card">
              <div class="card-body">
                <div>
                  <h2 class="card-title">Track</h2>
                  <p class="card-text">Keep track of your current and upcoming tasks with your TODO List!</p>
                </div>
                <div class="card-description">
                  <img class="desktop-image" src=${ViewableTaskListImage} alt="Viewable Task List View"/>
                  <img class="mobile-image" src=${ViewableTaskListMobileImage} alt="Viewable Task List Mobile View"/>
                  <p>During breaks, you'll be able to checkoff the current task, and your next task will be displayed. At the bottom of the screen you'll be able to check your TODO List, and completed tasks.</p>
                </div>
              </div>
              <p class="card-endnote">Don't know what a Pomodoro is? A Pomodoro is an aspect of the Pomodoro Technique. The technique pushes the user to work on tasks in 25 minute chunks (Pomodoro) with breaks between, and long breaks after 4 Pomodoros.</p>
            </div>
            <div class="card">
              <div class="card-body">
                <div>
                  <h2 class="card-title">Track</h2>
                  <p class="card-text">Keep track of your current and upcoming tasks with your TODO List!</p>
                </div>
                <div class="card-description card-track-2">
                  <div>
                    <img src=${GreenTomato} alt="Green Pomodoro Tomato"/>
                    <p>A Green Tomato in the background means you're working on a task.</p>
                  </div>
                  <div>
                    <img src=${RedTomato} alt="Red Pomodoro Tomato"/>
                    <p>A Red Tomato in the background means you're on a break.</p>
                  </div>
                </div>
              </div>
              <p class="card-endnote">Don't know what a Pomodoro is? A Pomodoro is an aspect of the Pomodoro Technique. The technique pushes the user to work on tasks in 25 minute chunks (Pomodoro) with breaks between, and long breaks after 4 Pomodoros.</p>
            </div>
            <div class="card">
              <div class="card-body">
                <div>
                  <h2 class="card-title">Record</h2>
                  <p class="card-text">Compare the Expected to Actual Pomodoros at the end of your session!</p>
                </div>
                <div class="card-description">
                  <img class="desktop-image" src=${StatsModalImage} alt="Stats Modal View"/>
                  <img class="mobile-image" src=${StatsMobileImage} alt="Stats Modal Mobile View"/>
                  <p>This page will help you see how long your tasks took compared to how long you expected.
                  With this information, you can better time yourself and productivity next session!</p>
                </div>
              </div>
              <p class="card-endnote">Don't know what a Pomodoro is? A Pomodoro is an aspect of the Pomodoro Technique. The technique pushes the user to work on tasks in 25 minute chunks (Pomodoro) with breaks between, and long breaks after 4 Pomodoros.</p>
            </div>
            <div class="card">
              <div class="card-body">
                <div>
                  <h2 class="card-title">Settings</h2>
                  <p class="card-text">Customize the behavior of the Pomodoro Timer as you want!</p>
                </div>
                <div class="card-description card-settings">
                  <img src=${SettingsModal} alt="Stats Modal View"/>
                  <p>In settings, you can edit the theme, icon, or durations for the Pomodoro Timer.</p>
                </div>
              </div>
              <p class="card-endnote">Don't know what a Pomodoro is? A Pomodoro is an aspect of the Pomodoro Technique. The technique pushes the user to work on tasks in 25 minute chunks (Pomodoro) with breaks between, and long breaks after 4 Pomodoros.</p>
            </div>
          </div>
          <button id="info-close" class="btn btn-primary">Close</button>
        </div>
      </div>
    </div>`;

    // Set references to elements of modal
    this.wrapper = document.getElementById('info-wrapper');
    this.closeButton = document.getElementById('info-close');

    // Set up close button
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  /*
  * Opens the info modal
  */
  open() {
    this.wrapper.style.display = 'flex';
  }

  /**
  * Closes the info modal
  */
  close() {
    this.wrapper.style.display = 'none';
  }
}

customElements.define('info-modal', InfoModal);
export default InfoModal;
