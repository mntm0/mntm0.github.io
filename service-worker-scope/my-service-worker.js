self.addEventListener('install', (event) => {
  console.log('service worker install ...');
});
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/index.html',
        '/index.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);
});
