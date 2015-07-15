var CACHE_NAME = "bibi-serviceworker-cache-v1";

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener("fetch", function fetchEpubResource(event) {
  console.info("Fetch");
  event.respondWith(
    caches.match(event.request).then(function repondFromCache(response) {
      if (response) {
        console.info("Cache hit");
        return response;
      }

      console.info("Cache missed");
      var request = event.request;
      var fetchRequest = request.clone();
      var url = request.url;
      var matchData = url.match(/bookshelf\/(.+)$/);
      if (matchData && (! /\.epub$/.test(url))) {
        requestToPackage = request.clone();
        var referrer = requestToPackage.referrer;
        var query = referrer.split("?")[1];//FIXME: Use URL object
        var path = query.split("=")[1];
        var packageUrl = matchData.input.substr(0, matchData.input.length - matchData[1].length) + path + ".epub";
        console.log(packageUrl);
        // fetch package and extract contents and cache them
      }
      return fetch(fetchRequest).then(function(response) {
        if (! response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function cacheResource(cache) {
          cache.put(request, responseToCache);
        });

        return response;
      });
    })
  );
});
