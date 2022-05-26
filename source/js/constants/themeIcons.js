import tomatoWhite from '../../img/tomWhite.svg';
import tomatoPomo from '../../img/tomGreen.svg';
import tomatoBreak from '../../img/tomRed.svg';

import bombWhite from '../../img/bombWhite.svg';
import bombPomo from '../../img/bombPomo.svg';
import bombBreak from '../../img/bombBreak.svg';

// Theme object setter
const svgIcons = {
  default: {
    urls: [tomatoWhite, tomatoPomo, tomatoBreak],
    classes: ['green-tomato', 'red-tomato'],
  },
  bomb: {
    urls: [bombWhite, bombPomo, bombBreak],
    classes: ['bomb-pomo'],
  },
};

export default svgIcons;
