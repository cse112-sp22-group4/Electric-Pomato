/**
 * @file The main controller of the HTML and interaction between Front-End and Back-End.
 * @author Andy Young
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 * @author Teresa Truong
 * @author Annika Hatcher
 * @author Luke Menezes
 * @author Meshach Adoe
 * @author Xingyu Zhu
 * @author Alan Wang
 * @author Steven Harris
 */

import PopUp from '../classes/PopUp.js';
import EditableTaskList from '../components/EditableTaskList.js';
import ViewOnlyTaskList from '../components/ViewOnlyTaskList.js';
import TimerUI from '../components/TimerUI.js';
import FinishTaskButton from '../components/FinishTaskButton.js';
import StatsModal from '../components/StatsModal.js';
import * as backend from '../backend.js';

// Icon assets
import pomoIcon from '../../img/green-tomato.png';
import breakIcon from '../../img/red-tomato.png';

const appIcon = new URL('../../img/favicon.ico', import.meta.url);

// Import audio from local file
const notiSound = new URL('../../audio/notification-ping.mp3', import.meta.url);

/**
 * STATE:
 * {
 *  Username: {String}
 *    null: redirect to index.html
 *  Started: {Boolean}
 *    true: display TimerUI & ViewOnlyTaskList,
 *    false: go to Editable Task List display.
 *  TotalPomos: {Number}
 *    Elapsed pomos.
 *  Timer: {Boolean}
 *    true: pomodoro
 *    false: break
 *      TotalPomos % 4 == 0: long break
 *      else: short break
 * }
 */

// DOM elements
const appContainer = document.querySelector('.app-container');
const favicon = document.querySelector("link[rel*='icon']");

// Menu icons
const menuIcons = document.querySelector('menu-icons');

// Finished state
let finished = false;

// View only task list
let votl = null;

// Website title
let windowTitle = 'Electric Pomato';

/* **************************** Helper Functions **************************** */

/**
 * Returns whether or not the next break is a short or long break
 * @return {boolean} true if next break is a long break, false otherwise
 */
function isLongBreak() {
  const currentPomos = Number(backend.get('CurrentPomos'));
  // If there has been 4 pomos then it is a long break
  return currentPomos > 0 && currentPomos % 4 === 0;
}

/**
 * Handles all things that need to be done on timer tick, like updating website title
 */
function handleTick(event) {
  document.title = `${event.text} - ${windowTitle}`;
}
/**
 * Handles all things that need to be done at the end of the session, called by initTimer
 * @ignore
 */
function handleEndOfSession() {
  // Move completed task list to history
  let history = JSON.parse(backend.get('History'));
  const { completed } = JSON.parse(backend.get('TaskList'));
  const currDate = new Date();

  // Store tasklist as session with date of completion
  const session = {
    date: `${currDate.getMonth() + 1}/${currDate.getDate()}/${currDate.getFullYear()}`,
    tasklist: completed,
  };

  if (history) {
    history.sessions.push(session);
  } else {
    history = { sessions: [session] };
  }
  backend.set('History', JSON.stringify(history));

  // Wipe data from previous task list
  backend.clearSessionData();

  // if user does not have enough sessions, go to homepage, otherwise open stats modal
  const statsModal = document.querySelector('stats-modal');
  if (!StatsModal.hasEnoughSessions()) {
    window.location.href = './index.html';
  } else {
    statsModal.open('./index.html');
  }
}

/**
 * Update the .app-title based on the break's checkbox.
 * @param {boolean} taskFinished - true if moving on to next task in list, false otherwise.
 * @ignore
 */
function updateAppTitle(taskFinished) {
  const taskList = JSON.parse(backend.get('TaskList'));
  const { length } = taskList.todo;
  const appTitle = document.querySelector('.app-title');
  const appSubtitle = document.querySelector('.app-subtitle');

  let subtitle = '';
  let taskName = taskList.todo[0].name;

  // Edit task length if too long
  if (taskName.length > 20) {
    taskName = `${taskName.substring(0, 20)}...`;
  }

  // Set title based on timer state
  if (backend.get('Timer') === 'true' && !taskFinished) {
    appTitle.textContent = 'Pomodoro';
  } else if (isLongBreak()) {
    appTitle.textContent = 'Long Break';
  } else {
    appTitle.textContent = 'Short Break';
  }

  // Determine the subtitle based on the length of the TODO list.
  if (length === 0) {
    subtitle = 'End of Session';
    finished = true;
    handleEndOfSession();
  } else if (backend.get('Timer') === 'true') {
    if (taskFinished) {
      appTitle.textContent = `Focus: ${taskName}`;
    } else {
      subtitle = `Focus: ${taskName}`;
    }
  } else if (taskFinished && length > 1) {
    subtitle = `Next Task: ${taskName}`;
  } else if (length === 1) {
    subtitle = `Final Task: ${taskName}`;
  } else {
    subtitle = `Current Task: ${taskName}`;
  }
  appSubtitle.textContent = subtitle;
}

/**
 * A callback function used in the FinishTaskButton on
 * changing of the timer and the text on thebutton.
 * @param {Object} object - A FinishTaskButton object.
 * @ignore
 */
function nextTask(object) {
  // Add any partial time from a pomo session to the task time.
  // Check that the timer is running for the edge case where a task
  // is finished during break, but timer has updated to pomo.
  votl.finishTask(backend.get('Timer') === 'true' && document.querySelector('.timer-text').textContent !== 'START');

  // Update app title
  updateAppTitle(object.getChecked());

  // Update Finish task button according to task list
  object.updateButton();

  // Start tracking time for the next task
  votl.startTask();
}

/**
 * @ignore
 * Initialize the timer based on current STATE.
 * @ignore
 * @param {Object} timer - The Timer object.
 * @ignore
 */
function initTimer(timer) {
  // Change to done page if no more tasks in todo.
  if (JSON.parse(backend.get('TaskList')).todo.length === 0) {
    handleEndOfSession();
  } else {
    const timerState = backend.get('Timer');
    timer.reset();

    // If timer is true set pomo, otherwise it is a break
    if (timerState === 'true') {
      // Update the HTML
      updateAppTitle(false);
      timer.setColorGreen();
    } else {
      // Update the HTML
      menuIcons.defaultMode();
      document.querySelector('.app-subtitle').style.display = 'block';
      updateAppTitle(false);
      timer.setColorRed();
    }
  }
}

/**
 * Plays the sound from the given link
 * @param {String} link - Link to mp3 file to play
 * @ignore
 */
function playSound(link) {
  const sound = new Audio(link);
  sound.play();
}

/**
 * Displays notification and plays sound when timer ends
 * @ignore
 */
function showTimerNotification() {
  const timerState = backend.get('Timer');
  const pomoAlert = {
    icon: null,
    body: null,
    tag: 'pomo-alert',
    silent: true,
  };

  // Set notification icon/text based on timer state
  if (timerState === 'true') {
    pomoAlert.icon = pomoIcon;
    pomoAlert.body = 'Good Work! Time to recharge.';
  } else {
    pomoAlert.icon = breakIcon;
    pomoAlert.body = "Break time is over. It's time to plug in!";
  }

  // Show the notification
  let register = null;
  navigator.serviceWorker.getRegistration()
    .then((reg) => {
      register = reg;
      reg.showNotification('Electric Pomato', pomoAlert)
        .then(() => register.getNotifications()
          .then((notifications) => {
            setTimeout(() => notifications.forEach((notification) => notification.close()), 5000);
          }));
      playSound(notiSound);
    });
}

/**
 * Handle starting the timer and updating the Pomos.
 * @param {Object} timer - The Timer object.
 * @param {Object} taskList - The TaskList object.
 * @ignore
 */
function handleClick(timer, taskList) {
  let active = false;

  timer.firstElementChild.addEventListener('click', () => {
    if (!active) {
      document.addEventListener('timerTick', handleTick);
      if (backend.get('Timer') === 'true') {
        favicon.href = pomoIcon;
        windowTitle = 'Plugged in!';
        // Hide all icons except home when a work session starts.
        menuIcons.focusMode();
        taskList.startTask();
        // Replace the title with the subtitle and hide the subtitle
        const appTitle = document.querySelector('.app-title');
        const appSubtitle = document.querySelector('.app-subtitle');
        appTitle.textContent = appSubtitle.textContent;
        appSubtitle.style.display = 'none';
        const workSessionDuration = backend.get('WorkSessionDuration');
        timer.createTimer(workSessionDuration, 0);
      } else {
        favicon.href = breakIcon;
        windowTitle = 'Recharging...';
        if (isLongBreak()) {
          const longBreakDuration = backend.get('LongBreakDuration');
          timer.createTimer(longBreakDuration, 0);
        } else {
          const shortBreakDuration = backend.get('ShortBreakDuration');
          timer.createTimer(shortBreakDuration, 0);
        }
      }

      // Create finish task button for this session
      const finishTaskButton = new FinishTaskButton(nextTask);
      timer.appendChild(finishTaskButton);

      active = true;
      timer.startTimer().then(() => {
        if (!finished) {
          // Reset to default icon/title
          document.removeEventListener('timerTick', handleTick);
          favicon.href = appIcon;
          windowTitle = 'Electric Pomato';
          document.title = windowTitle;

          const timerState = backend.get('Timer');

          // Increment pomos if we were in a Pomo session
          if (timerState === 'true') {
            backend.set('TotalPomos', Number(backend.get('TotalPomos')) + 1);
            backend.set('CurrentPomos', Number(backend.get('CurrentPomos')) + 1);
            taskList.updateTime();

            // Alert the user if they have reached their expected number of pomos
            const endMessage = {
              title: 'You have reached the expected Pomodoros for this task. Finish task or continue working?',
              leftButton: 'Finish Task',
              rightButton: 'Continue Working',
            };
            if (taskList.data.todo[0].actual === taskList.data.todo[0].expected) {
              PopUp.prompt(endMessage, false).then((result) => {
                if (result === 'left') {
                  // Simulate clicking the finish task button
                  finishTaskButton.checked = true;
                  nextTask(finishTaskButton);
                  PopUp.hide();
                } else {
                  PopUp.hide();
                }
              });
            }
          }

          // Remove the finish task button
          timer.lastElementChild.remove();

          if (('Notification' in window) && navigator.serviceWorker) {
            showTimerNotification();
          }

          backend.set('Timer', timerState === 'false');
          initTimer(timer);
          active = false;
        }
      });
    }
  });
}

/**
 * Displays the Timer and begins to handle the events of interaction.
 * @ignore
 */
function showTimer() {
  const timerUI = new TimerUI();
  votl = new ViewOnlyTaskList();

  // Call any helper functions to handle user events.
  handleClick(timerUI, votl);
  initTimer(timerUI);

  appContainer.appendChild(timerUI);
  appContainer.appendChild(votl);
}

/* ***************************** Event Handling ***************************** */

/**
 * Will hold all Edge Cases that should be check when a page is loaded.
 * @ignore
 */
function handleOnLoad() {
  // Redirect to index.html if no name is in localStorage.
  if (backend.get('Username') == null) {
    window.location.href = 'index.html';
  } else if (backend.get('Started') === 'true') {
    // if started session, go to timer
    showTimer();
  } else {
    // otherwise, go to task list page
    if (backend.get('HasSeenInfo') === null) {
      menuIcons.infoModal.open();
      backend.set('HasSeenInfo', 'true');
    }
    appContainer.appendChild(new EditableTaskList());
    document.querySelector('.app-title').textContent = `${backend.get('Username')}'s Session`;
    appContainer.querySelectorAll('.start-day-button').forEach((button) => {
      button.addEventListener('click', () => {
        backend.set('Started', true);
        backend.set('Timer', true);
        backend.set('TotalPomos', 0);
        backend.set('CurrentPomos', 0);
        appContainer.lastElementChild.remove();
        showTimer();
      });
    });
  }

  // Request notification permission on page load
  if (!('Notification' in window)) {
    console.log('Error: Browser does not support notifications');
  } else if (Notification.permission === 'granted') {
    console.log(`Notifications permission ${Notification.permission}`);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }
      if (permission === 'granted') {
        console.log('Notifications permission granted');
      }
    });
  } else {
    console.log(`Notifications permission ${Notification.permission}`);
  }
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
