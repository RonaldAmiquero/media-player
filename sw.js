const VERSION = 'v1';
//self: hace referencia a los service workers
self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  //get
  if (request.method !== 'GET') {
    return;
  }

  //buscar en cache
  event.respondWith(cachedResponse(request));

  //actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    /* '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4', */
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  console.log(`Code: ${response.status} | Messsage: ${response.statusText}`);
  if (response.status === 206) {
    console.log('Respuesta parcial, no se actualiza caché ...');
  } else {
    cache.put(request, response.clone());
  }
  return cache;
}

/* async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
} */
