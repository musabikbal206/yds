const CACHE_NAME = 'esinav-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './questions.js',
  './translations.js',
  './icon.svg',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});