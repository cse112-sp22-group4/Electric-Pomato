// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('../../serviceWorker.js', import.meta.url), { type: 'module' })
    .then(() => { console.log('Service Worker Register'); });
}
