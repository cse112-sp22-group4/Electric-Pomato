/* eslint-disable no-restricted-globals */
import { manifest, version } from '@parcel/service-worker';

// Cache necessary files when service worker is installed
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(version).then((cache) => cache.addAll(manifest)));
});

// Clean up old service workers when activated
async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map((key) => key !== version && caches.delete(key)),
  );
}

self.addEventListener('activate', (e) => e.waitUntil(activate()));

// Intercept web page requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request)),
  );
});
