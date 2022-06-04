/**
 * @file Stores the backend functions that access the browser's localStorage
 * @author Meshach
 * Date: 27/04/2022
 */

/**
 * Get value from localStorage for provided key
 * @param {string} key - Key to be queried
 */
export function get(key) {
  return localStorage.getItem(key);
}

/**
 * Set value in localStorage for provided key
 * @param {string} key - Key to be set
 * @param {string} value - Value to be set
 */
export function set(key, value) {
  localStorage.setItem(key, value);
}

/**
 * Remove value in localStorage for provided key
 * @param {string} key - Key to be removed
 */
export function remove(key) {
  localStorage.removeItem(key);
}

/**
 * Remove all session-related values in localStorage
 */
export function clearSessionData() {
  localStorage.removeItem('TaskList');
  localStorage.removeItem('Started');
  localStorage.removeItem('TotalPomos');
  localStorage.removeItem('CurrentPomos');
  localStorage.removeItem('Timer');
  localStorage.removeItem('AudioToggle');
}

/**
 * Remove all values in localStorage
 */
export function removeAll() {
  localStorage.removeItem('TaskList');
  localStorage.removeItem('Started');
  localStorage.removeItem('TotalPomos');
  localStorage.removeItem('CurrentPomos');
  localStorage.removeItem('Timer');
  localStorage.removeItem('WorkSessionDuration');
  localStorage.removeItem('ShortBreakDuration');
  localStorage.removeItem('LongBreakDuration');
  localStorage.removeItem('HasSeenInfo');
  localStorage.removeItem('AudioToggle');
}
