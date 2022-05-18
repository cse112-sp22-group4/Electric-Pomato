/**
 * @file Holds the Timer class and defines its functionality.
 * @author Donald Wolfson
 * @author Justin Lee
 * @author Enrique Gan
 * @author Arman Mansourian
 * Date: 03/07/2021
 */

/**
 * Defines the Timer class that fires a callback the moment it starts
 * and every second after until the timer reaches 0 mins 0 seconds (inclusive).
 */
class Timer {
  /**
   * Constructs the timer object.
   * @param {number} minutes - The number of minutes the timer counts down (max is 99)
   * @param {number} seconds - The number of seconds the timer counts down (max is 59)
   * @param {callback} callbackEverySecond - callback called every second.
   */
  constructor(minutes, seconds, callbackEverySecond) {
    if (minutes > 99) minutes = 99;
    this.minutes = minutes;
    if (seconds > 59) seconds = 59;
    this.seconds = seconds;
    this.callbackEverySecond = callbackEverySecond;
  }

  /**
   * Starts the timer and immediately ticks down.
   * Timer cannot be reset to original time after ticking.
   * Note: This doesn't not check system date/time. It ticks at 1 second
   * intervals, possibly being ahead or behind by negligible amounts.
   */
  startTimer() {
    return new Promise((resolve) => {
      // Count down immediately and call the callback (callback is mostly used to set the text)
      const resolveMessage = 'Timer Finished';
      if (this.callbackEverySecond !== null) {
        this.callbackEverySecond(this.minutes, this.seconds);
      }
      if (this.seconds === 0 && this.minutes !== 0) {
        this.minutes -= 1;
        this.seconds = 60;
      } else if (this.seconds === 0 && this.minutes === 0) {
        resolve(resolveMessage);
      }
      console.log(Date.now());
      this.seconds -= 1;

      // Keep counting down until it reaches 0 mins 0 seconds (inclusive)
      const end = Math.floor(Date.now() / 1000) + (this.minutes * 60) + (this.seconds);
      const countdown = setInterval(() => {
        // This is where the timer callbacks a function every second
        if (this.callbackEverySecond !== null) {
          this.callbackEverySecond(this.minutes, this.seconds);
        }
        if (this.seconds === 0 && this.minutes === 0) {
          resolve(resolveMessage);
          clearInterval(countdown);
        }
        // Get start and end time in seconds
        const now = Math.floor(Date.now() / 1000);

        // Difference in seconds
        const diff = end - now;

        this.minutes = Math.floor(diff / 60);
        this.seconds = diff % 60;
      }, 1000);
    });
  }
}

export default Timer;
