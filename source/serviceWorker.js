/* eslint-disable no-restricted-globals */
import { manifest, version } from '@parcel/service-worker';

// Cache necessary files when service worker is installed
async function install() {
  const cache = await caches.open(version);
  // Filter out any possible duplicate files from manifest
  const filteredManifest = manifest.filter((item, index) => manifest.indexOf(item) === index);
  await cache.addAll(filteredManifest);
}

self.addEventListener('install', (e) => e.waitUntil(install()));

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
