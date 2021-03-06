// Only register the service worker for testing and in production to avoid conflicting
// issues with Parcel's HMR during development.
// Simply remove the development check if wanting to test service worker updates locally
if (window.Cypress || ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development')) {
  navigator.serviceWorker.register(new URL('../../serviceWorker.js', import.meta.url), { type: 'module' })
    .then((registration) => {
      console.log('Service Worker Registration succeeded', registration);
    }, (error) => {
      console.log('Service Worker Registration failed', error);
    });
}
