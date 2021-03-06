/**
 * @file Instantiates icons indicating pomo and breaks accordingly to theme
 * @author Christopher Yoon
 * Date: 05/23/2022
 */

import * as backend from '../backend.js';
import svgIcons from '../constants/themeIcons.js';

/**
 * Defines the IntroIcons displayed on index.html accordingly to the theme
 */
class IntroIcons extends HTMLElement {
  constructor() {
    super();

    // Get the theme
    const iconURL = svgIcons[backend.get('Icon')].urls;
    this.innerHTML = `
        <div class="intro-icons-wrapper">
            <div class="intro-icons-item me-4">
                <object id="icon1" class="legend-icon" type="image/svg+xml" data=${iconURL[1]}></object>
                <h3 class="text-white mb-0">25 Minutes of Productivity</h3>
            </div>
            <div class="intro-icons-item">
              <object id="icon1" class="legend-icon" type="image/svg+xml" data=${iconURL[2]}></object>
              <h3 class="text-white mb-0">5 Minutes of Relaxing</h3>
            </div>
        </div>
    `;
  }
}

customElements.define('intro-icons', IntroIcons);
