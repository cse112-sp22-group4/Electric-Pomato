import tomatoWhite from '../../assets/images/tomWhite.svg';
import tomatoPomo from '../../assets/images/tomGreen.svg';
import tomatoBreak from '../../assets/images/tomRed.svg';

import bombWhite from '../../assets/images/bombWhite.svg';
import bombPomo from '../../assets/images/bombPomo.svg';
import bombBreak from '../../assets/images/bombBreak.svg';

// Theme object setter
const svgIcons = {
  default: {
    urls: [tomatoWhite, tomatoPomo, tomatoBreak],
    classes: ['white-tomato', 'green-tomato', 'red-tomato'],
  },
  bomb: {
    urls: [bombWhite, bombPomo, bombBreak],
    classes: ['bomb-white', 'bomb-pomo'],
  },
};

export default svgIcons;
