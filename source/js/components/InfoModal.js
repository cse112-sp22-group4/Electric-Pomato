/**
 * @file Creates and defines the functionality for the info modal.
 * @author Steven Harris
 * @author Alan Wang
 * Date: 05/11/2022
 */

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
                <h2 class="card-title">Plan</h2>
                <p class="card-text">
                  Create a list of tasks that you would like to complete this session!
                  <ol>
                    <li>First enter your name above to enter the Task List editor.</li>
                    <li>Each task asks for a name, and the estimated Pomodoros that will be needed (1-5).</li>
                    <ul>
                      <li><b>Don't know what a Pomodoro is?</b> A Pomodoro is an aspect of the Pomodoro
                        Technique. The technique pushes the user to work on tasks in 25 minute chunks
                        (Pomodoro) with breaks between, and long breaks after 4 Pomodoros. </li>
                    </ul>
                      <li>Once you've finished making your tasks, start your session!</li>
                  </ol>
                  <p><b>Returning user?</b> The prompt above will allow you to resume a previous session or create
                      a new one.<br></p>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Track</h2>
                <p class="card-text">
                  Keep track of your current and upcoming tasks with your TODO List!
                <ul>
                  <li>Your current task will be displayed at the top of the timer at all times.</li>
                  <li>During breaks, you'll be able to checkoff the current task, and your next task will be
                    displayed.</li>
                  <li>At the bottom of the screen you'll be able to check your TODO List, and completed tasks.
                  </li>
                </ul>
                <b>Not sure if you're on a task or a break?</b>
                <ul>
                  <li>A Green Tomato in the background means you're working on a task.</li>
                  <li>A Red Tomato in the background means you're on a break.</li>
                </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Record</h2>
                <p class="card-text">
                  Compare the Expected to Actual Pomodoros at the end of your session!
                  <ul>
                    <li>At the end of your last task's break, you'll be prompted to either return to the home
                      page, or view you session's stats.</li>
                    <li>This page will help you see how long your tasks took compared to how long you expected.
                    </li>
                    <li>With this information, you can better time yourself and productivity next session!</li>
                  </ul>
                  <b>Did a task take much longer than expected?</b>
                  <ul>
                    <li>The Pomodoro Technique recommends splitting tasks into smaller, digestible chunks.</li>
                    <li>By design, we only allow up to 5 Pomodoros per task, to assist in breaking up tasks into
                      easier to complete chunks.</li>
                  </ul>
                </p>
              </div>
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