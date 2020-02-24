const CACHE_VERSION = '2020-02-25';
const FILES_TO_CACHE = [
    '',
    'index.html',
    'icon.png',
    'presets/default.js',
    'resources/styles/bibi.css',
    'resources/styles/fonts/MaterialIcons-Regular.eot',
    'resources/styles/fonts/MaterialIcons-Regular.ttf',
    'resources/styles/fonts/MaterialIcons-Regular.woff',
    'resources/styles/fonts/MaterialIcons-Regular.woff2',
    'resources/scripts/bibi.js',
    'resources/scripts/polyfills/bundle.js',
    'resources/scripts/polyfills/encoding.js',
    'resources/scripts/polyfills/intersection-observer.js',
    'wardrobe/everyday/bibi.dress.css',
    'extensions/analytics.js',
    'extensions/epubcfi.js',
    'extensions/unaccessibilizer.js',
    'extensions/zine.js',
    'extensions/extractor/at-once.js',
    'extensions/extractor/on-the-fly.bibi-zip-loader.worker.js',
    'extensions/extractor/on-the-fly.js'
].map(path => `/bibi/${path}`);

self.addEventListener('install', event => {
    event.waitUntil(
	caches.open(CACHE_VERSION)
	    .then(cache => {
		return cache.addAll(FILES_TO_CACHE)
	    })
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    if (url.origin === location.origin && FILES_TO_CACHE.includes(url.pathname)) {
	event.respondWith(caches.match(request));
    }
});
