import * as backend from '../backend.js';
import userThemes from '../constants/userThemes.js';

const currentTheme = backend.get('UserTheme') || userThemes.DEFAULT;
document.documentElement.classList.value = `theme-${currentTheme}`;
