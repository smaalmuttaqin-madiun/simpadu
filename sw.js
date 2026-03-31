const CACHE_NAME = "simpadu-cache-v4";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Jika tampilan sudah ada di memori HP, tampilkan dalam 0 detik!
      if (response) return response;
      // Jika belum, ambil dari internet
      return fetch(event.request);
    })
  );
});
