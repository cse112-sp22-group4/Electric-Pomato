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
 */

import EditableTaskList from '../components/EditableTaskList.js';
import ViewOnlyTaskList from '../components/ViewOnlyTaskList.js';
import TimerUI from '../components/TimerUI.js';
import BreakPrompt from '../components/BreakPrompt.js';
import TaskList from '../classes/TaskList.js';
import * as backend from '../backend.js';

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

// Menu icons
const menuIcons = document.querySelector('menu-icons');

// Finished state
let finished = false;

/* **************************** Helper Functions **************************** */

/**
 * Returns whether or not the next break is a short or long break
 * @return {boolean} true if next break is a long break, false otherwise
 */
function isLongBreak() {
  const totalPomos = Number(backend.get('TotalPomos'));
  // If there has been 4 pomos then it is a long break
  return totalPomos > 0 && totalPomos % 4 === 0;
}

/**
 * Handles all things that need to be done at the end of the session, called by initTimer
 * @ignore
 */
function handleEndOfSession() {
  // Move completed task list to history
  let history = JSON.parse(backend.get('History'));
  const { completed } = JSON.parse(backend.get('TaskList'));
  if (history) {
    history.tasklists.push(completed);
  } else {
    history = { tasklists: [completed] };
  }
  backend.set('History', JSON.stringify(history));

  // Wipe data from previous task list
  backend.clearSessionData();

  document.querySelector('stats-modal').open('./index.html');
}

/**
 * Update the .app-title based on the break's checkbox.
 * @param {boolean} nextTask - Next task in list.
 * @ignore
 */
function updateAppTitle(nextTask) {
  const taskList = JSON.parse(backend.get('TaskList'));
  const { length } = taskList.todo;
  const appTitle = document.querySelector('.app-title');
  const appSubtitle = document.querySelector('.app-subtitle');

  let subtitle = '';

  // Set title based on timer state
  if (backend.get('Timer') === 'true') {
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
    const t = new TaskList();
    t.finishTask();
    handleEndOfSession();
  } else if (nextTask && length === 1) {
    subtitle = 'End of Session';
    finished = true;
    const t = new TaskList();
    t.finishTask();
    handleEndOfSession();
  } else if (nextTask && length - 1 === 1) {
    subtitle = `Final Task: ${taskList.todo[1].name}`;
  } else if (nextTask && length - 1 > 1) {
    subtitle = `Next Task: ${taskList.todo[1].name}`;
  } else if (length === 1) {
    subtitle = `Final Task: ${taskList.todo[0].name}`;
  } else {
    subtitle = `Current Task: ${taskList.todo[0].name}`;
  }
  appSubtitle.textContent = subtitle;
}

/**
 * A callback function used in the BreakPrompt on changing of the checkbox.
 * @param {Object} object - A BreakPrompt object.
 * @ignore
 */
function changeTitle(object) {
  updateAppTitle(object.getChecked());
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
      const breakPrompt = new BreakPrompt(changeTitle);

      // Update the HTML
      menuIcons.defaultMode();
      updateAppTitle(false);
      timer.setColorRed();
      timer.appendChild(breakPrompt);
    }
  }
}

/**
 * Displays notification and plays sound when timer ends
 * @ignore
 */
function showTimerNotification() {
  const timerState = backend.get('Timer');
  if (timerState === 'true') {
    const pomoAlert = new Notification('Electric Pomato', {
      icon: 'img/green-tomato.ico',
      body: 'Good Work! Time to recharge.',
    });
    setTimeout(pomoAlert.close.bind(pomoAlert), 5000);
    pomoAlert.addEventListener('click', () => {
      window.focus();
    });
  } else {
    const breakAlert = new Notification('Electric Pomato', {
      icon: 'img/red-tomato.ico',
      body: "Break time is over. It's time to plug in!",
    });
    setTimeout(breakAlert.close.bind(breakAlert), 5000);
    breakAlert.addEventListener('click', () => {
      window.focus();
    });
  }
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
      if (backend.get('Timer') === 'true') {
        // Hide all icons except home when a work session starts.
        menuIcons.focusMode();
        const workSessionDuration = backend.get('WorkSessionDuration');
        timer.createTimer(workSessionDuration, 0);
      } else if (isLongBreak()) {
        const longBreakDuration = backend.get('LongBreakDuration');
        timer.createTimer(longBreakDuration, 0);
      } else {
        const shortBreakDuration = backend.get('ShortBreakDuration');
        timer.createTimer(shortBreakDuration, 0);
      }

      active = true;
      timer.startTimer().then(() => {
        if (!finished) {
          const timerState = backend.get('Timer');

          if (timerState === 'true') {
            backend.set('TotalPomos', Number(backend.get('TotalPomos')) + 1);
            taskList.addPomo();
          }

          if (timerState === 'false') {
            if (timer.lastElementChild.getChecked()) {
              taskList.finishTask();
              taskList.render();
            }

            timer.lastElementChild.remove();
          }

          if (('Notification' in window) && Notification.permission === 'granted') {
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
  const votl = new ViewOnlyTaskList();

  // Call any helper functions to handle user events.
  updateAppTitle(false);
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
  if (!backend.get('Username')) {
    window.location.href = 'index.html';
  } else if (backend.get('Started')) {
    showTimer();
  } else {
    appContainer.appendChild(new EditableTaskList());
    document.querySelector('.app-title').textContent = `${backend.get('Username')}'s Day`;
    appContainer.querySelectorAll('.start-day-button').forEach((button) => {
      button.addEventListener('click', () => {
        backend.set('Started', true);
        backend.set('Timer', true);
        backend.set('TotalPomos', 0);
        appContainer.lastElementChild.remove();
        showTimer();
      });
    });
  }

  // Request notification permission on page load
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
  } else {
    console.log(Notification.permission);
    if (Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  }
}

// Handle any edge cases on loading into the page.
window.addEventListener('load', handleOnLoad);
