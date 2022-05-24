/**
 * @file Instantiates icons indicating pomo and breaks accordingly to theme
 * @author Christopher Yoon
 * Date: 05/23/2022
 */

import * as backend from '../backend.js';
import svgURL from '../constants/themeIcons.js';

/**
 * Defines the IntroIcons displayed on index.html accordingly to the theme
 */
class IntroIcons extends HTMLElement {
  constructor() {
    super();

    // Get the theme
    const theme = backend.get('Theme');
    this.innerHTML = `
            <div class="d-flex align-items-center">
                <object id="icon1" class="legend-icon" type="image/svg+xml" data=${svgURL[theme][1]}></object>
                <h3 class="text-white mb-0">25 Minutes of Productivity</h3>
            </div>
            <div class="d-flex align-items-center">
                <object id="icon1" class="legend-icon" type="image/svg+xml" data=${svgURL[theme][2]}></object>
                <h3 class="text-white mb-0"><span class="invisible">2</span>5 Minutes of Relaxing</h3>
            </div>
    `;
  }
}

customElements.define('intro-icons', IntroIcons);
