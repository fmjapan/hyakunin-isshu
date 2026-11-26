const CACHE_NAME = 'hyakunin-full-v2-scenes';
const SHELL = ['./','./index.html','./manifest.webmanifest','./apple-touch-icon.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('hyakunin-full-') && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method !== 'GET' || new URL(req.url).origin !== self.location.origin)return;
  if(req.mode === 'navigate') {
    event.respondWith(fetch(req).then(response => {
      if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache => cache.put('./index.html',copy));}
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  const url=new URL(req.url);
  if(url.pathname.endsWith('/scenes/manifest.json')){
    event.respondWith(fetch(req).then(response=>{
      if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)));}
      return response;
    }).catch(()=>caches.match(req).then(hit=>hit||Response.error())));
    return;
  }
  if(url.pathname.startsWith(new URL('./scenes/',self.registration.scope).pathname)){
    event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(response=>{
      if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)));}
      return response;
    })));
    return;
  }
  event.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
