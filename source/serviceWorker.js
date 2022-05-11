/* eslint-disable no-restricted-globals */

// Cache necessary files when service worker is installed
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open('ePomato').then((cache) => cache.addAll([
    '/',
    '/source/app.html',
    '/source/done.html',
    '/source/scss/main.scss',
    '/source/js/scripts/registerSw.js',
    '/source/js/scripts/backend.js',
    '/source/js/scripts/app.js',
    '/source/js/scripts/done.js',
    '/source/js/components/StartContainer.js',
    '/source/js/components/CurrentYear.js',
    '/source/js/components/LogsButton.js',
    '/source/js/components/StartButton.js',
    '/source/js/components/UsernameInput.js',
    '/source/js/components/WelcomeMessage.js',
    '/source/js/classes/TaskList.js',
    '/source/js/classes/PopUp.js',
    '/source/img/green-tomato.ico',
  ])));
});

// Intercept web page requests
self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request)),
  );
});
