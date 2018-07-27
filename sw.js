var cacheName= "restaurant-cache-1";
var urls_to_cache= [
  '/',
  '/CODEOWNERS',
  '/restaurant.html',
  '/index.html',
  '/css/responsive.css',
  '/css/styles.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(urls_to_cache);
    })
  );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
  caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
  }).catch((err) => {console.log("error:",err);}))
});
