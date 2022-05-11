// Service worker
if ('serviceWorker' in navigator) {
  // eslint-disable-next-line no-path-concat
  navigator.serviceWorker.register(new URL('../../serviceWorker.js', `${window.location.origin}/${__dirname}`), { type: 'module' })
    .then(() => { console.log('Service Worker Register'); });
}
