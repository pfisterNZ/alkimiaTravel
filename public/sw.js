const CACHE_NAME = 'alkimia-travel-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/global.css',
  '/images/hero-bg-fallback.jpg',
  '/images/hero-bg-large.webp',
  '/images/hero-bg-medium.webp',
  '/images/hero-bg-small.webp',
  '/videos/bg-video-hero-480p.mp4',
  '/videos/bg-video-hero-720p.mp4',
  '/videos/bg-video-hero-1080p.mp4'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
}); 