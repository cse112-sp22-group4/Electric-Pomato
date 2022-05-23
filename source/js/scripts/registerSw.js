// Only register the service worker in production to avoid conflicting
// issues with Parcel's HMR during development.
// Simply remove the development check if wanting to test service worker updates locally
if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  navigator.serviceWorker.register(new URL('../../serviceWorker.js', import.meta.url), { type: 'module' })
    .then(() => { console.log('Service Worker Register'); });
}
