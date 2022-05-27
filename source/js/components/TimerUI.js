/* eslint-disable prefer-destructuring */
/**
 * @file TimerUI acts as the middle man between javascript and the html.
 * It creates a pomo timer that will update the html elements.
 * @author Justin Lee
 * @author Enrique Gan
 * @author Donald Wolfson
 * @author Andy Young
 * @author Liam Stone
 * @author Arman Mansourian
 */

import Timer from '../classes/Timer.js';
import svgIcons from '../constants/themeIcons.js';
import * as backend from '../backend.js';
/**
 * Creates the Custom HTMLElement for the Timer class.
 * @extends HTMLElement
 */
class TimerUI extends HTMLElement {
  /**
   * constructor for the UI in the Timer Object.
   */
  constructor() {
    super();
    this.theme = backend.get('Icon');
    this.classList.add('w-100', 'h-100', 'd-flex', 'flex-column', 'align-items-center');
    this.innerHTML = `
      <div class="timer-container position-relative mh-100 mw-100">
        <object id="timerIcon" class="w-100 h-100 position-absolute top-50 start-50 translate-middle" data=${svgIcons[this.theme].urls[1]}></object>
      </div>
    `;

    // Store the string to be displayed on top of the timer icon
    this.text = 'START';
  }

  /**
   * Resets the timer object when there are no more tasks in tasklist (app.js). Sets internal
   * text variable to 'START' so that svg text attribute can contain it when it renders
   * @returns With null when icon-text attribute is null as this means the svg hasn't loaded yet,
   * thus the text attribute cannot be set yet.
   */
  reset() {
    this.text = 'START';

    // If icon-text is null, means it's first load (so svg isn't loaded yet so return)
    if (!this.getAttribute('icon-text')) {
      return;
    }

    this.setAttribute('icon-text', 'START');
    // this.render();
    this.classList.remove('timer-active');
  }

  /**
   * Create an internal `Timer` object that sets its `callbackEverySecond`
   * callback function to a function that changes the timer html elements'
   * minute and second values for every second that it ticks down.
   * @param {number} minutes - minutes that will be stored in object.
   * @param {number} seconds - seconds that will be stored in object.
   */
  createTimer(minutes, seconds) {
    this.timer = new Timer(minutes, seconds, (newMinute, newSecond) => {
      // update html
      this.text = `${TimerUI.parseMinutes(newMinute)} : ${TimerUI.parseSeconds(newSecond)}`;
      this.setAttribute('icon-text', 'timerChanged');
    });
  }

  /**
   * Start the internal `Timer` object by returning the Promise from startTimer()
   * in the Timer class. Call this function by using await, the caller will be
   * blocked until the timer is done counting down.
   * @returns {Promise} Countdown of timer
   */
  startTimer() {
    // immediately update html
    this.text = `${TimerUI.parseMinutes(this.timer.minutes)} : ${TimerUI.parseSeconds(this.timer.seconds)}`;
    this.classList.add('timer-active');
    return this.timer.startTimer();
  }

  /**
   * Returns a string representing the minutes left with the format "MM".
   * ie: If 25 minuts are left, "25". If 9 minutes are left "09"
   * @param {number} minute - Number of minutes that will be formatted.
   * @returns {string} Minutes Left
   */
  static parseMinutes(minute) {
    if (minute < 10) { return `0${String(minute)}`; }
    return String(minute);
  }

  /**
   * Returns a string representing the seconds left with the format "SS".
   * ie: If 25 seconds are left, "25". If 9 seconds are left "09".
   * @param {number} second - Number of seconds that will be formatted.
   * @returns {string} Seconds Left
   */
  static parseSeconds(second) {
    if (second === 60 || second >= 60) return '00';
    if (second < 10) return `0${String(second)}`;
    return String(second);
  }

  /**
   * Sets the Tomato image to a Green Tomato.
   */
  setPomoIcon() {
    // If svg has not been loaded onto the page (load onto app.html for the first time or reload)
    // if (!this.icon) {
    //   this.color = svgIcons[this.theme].classes[0];
    //   return;
    // }

    // // Else svg has already been loaded onto the page (done multiple sessions with no reload)
    // this.icon.classList.remove(svgIcons[this.theme].classes[1]);
    // this.icon.classList.add(svgIcons[this.theme].classes[0]);
    this.querySelector('#timerIcon').setAttribute('data', svgIcons[this.theme].urls[1]);
  }

  /**
   * Sets the Tomato image to a Red Tomato.
   */
  setBreakIcon() {
    // If svg has not been loaded onto the page (load onto app.html for the first time or reload)
    // if (!this.icon) {
    //   this.color = svgIcons[this.theme].classes[1];
    //   return;
    // }

    // // Else svg has already been loaded onto the page (done multiple sessions with no reload)
    // this.icon.classList.remove(svgIcons[this.theme].classes[0]);
    // this.icon.classList.add(svgIcons[this.theme].classes[1]);

    this.querySelector('#timerIcon').setAttribute('data', svgIcons[this.theme].urls[2]);
  }

  /**
   * Sets the Tomato image to a Gold Tomato.
   */
  setColorGold() {
    this.querySelector('.timer-image').classList.add('gold-tomato');
  }

  render() {
    const timerSVG = this.querySelector('#timerIcon');
    timerSVG.addEventListener('load', () => {
      let svgDoc = timerSVG.contentDocument;

      // Fuck you jest
      if (process.env.NODE_ENV === 'test') {
        svgDoc = timerSVG;
      }

      // Set svg classes to style as timer icon
      svgDoc.querySelector('svg').classList.value = 'w-100 h-100 position-absolute top-50 start-50 translate-middle';
      this.icon = svgDoc.querySelector('svg > g');

      this.icon.classList.value = 'timer-image';
      this.icon.addEventListener('click', () => {
        // Bubble up the click event to set up / start timer in app.js
        this.dispatchEvent(new CustomEvent('iconclick'), {
          bubbles: true,
        });
      });

      // Grab the svg text tag to use in attributeChangedCallback lifestyle method
      this.svgText = svgDoc.querySelector('.timer-text');

      // Set the svg text tag to one set in reset() this line should only be called on initial load
      this.svgText.textContent = this.text;
    });
  }

  /**
   * Callback to render the timer
   */
  connectedCallback() {
    this.render();
  }

  /**
   * Callback to set the text of the text tag within the svgs when the icon-text attribute is
   * changed. The icon-text attribute is changed when the icon is loaded (check render)It is
   * set with this.text string.
   */
  attributeChangedCallback() {
    this.svgText.textContent = this.text;
  }

  /**
   * Tells attributeChangedCallback() which attributes to watch for changes on
   * @returns {array} String array of attributes to watch
   */
  static get observedAttributes() {
    return ['icon-text'];
  }
}

customElements.define('pomo-timer', TimerUI);
export default TimerUI;
