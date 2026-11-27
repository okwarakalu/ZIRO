// ZIRO Service Worker - App offline + install
const CACHE = 'ziro-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/','/index.html','/manifest.json','/css/style.css','/js/config.js','/js/core.js'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
