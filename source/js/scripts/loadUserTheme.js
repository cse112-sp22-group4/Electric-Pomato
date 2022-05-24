import * as backend from '../backend.js';

const currentTheme = backend.get('UserTheme') || 'default';
document.documentElement.classList.value = `theme-${currentTheme}`;
