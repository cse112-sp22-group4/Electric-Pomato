// Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('../../serviceWorker.js', import.meta.url), { type: 'module' })
    .then((registration) => {
      console.log('Service Worker Registration succeeded', registration);
    }, (error) => {
      console.log('Service Worker Registration failed', error);
    });
}
