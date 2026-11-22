/* Agro Biolquim – service worker: funciona sin internet */
const VERSION = 'ab-v3';
const PRECACHE = ["./", "index.html", "manifest.webmanifest", "assets/logo-mark.png", "assets/favicon.png", "assets/icon-192.png", "assets/asesor-rafael-patino-campo.webp", "assets/productos/mini/alga-800.webp", "assets/productos/mini/bades-amino-45.webp", "assets/productos/mini/bakteryn-cu.webp", "assets/productos/mini/botamisol.webp", "assets/productos/mini/citogrower.webp", "assets/productos/mini/estimul-mix.webp", "assets/productos/mini/frutaliv.webp", "assets/productos/mini/greenpega.webp", "assets/productos/mini/humiroot.webp", "assets/productos/mini/incipio.webp", "assets/productos/mini/jelfer.webp", "assets/productos/mini/lorfos.webp", "assets/productos/mini/luffy.webp", "assets/productos/mini/rafaga.webp", "assets/productos/mini/proroot.webp", "assets/productos/mini/pyrazol-pro.webp", "assets/productos/mini/stimulate-b9.webp", "assets/productos/mini/sulfok-plus.webp", "assets/productos/mini/tierra-diatomeas.webp", "assets/productos/mini/titan-fruit.webp", "assets/productos/mini/total-green.webp", "assets/productos/mini/vital-protec.webp", "assets/productos/mini/vitalhumic-k3.webp"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate'){
    /* páginas: primero internet, si no hay, la copia guardada */
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./'))));
    return;
  }
  /* imágenes y archivos: primero la copia guardada */
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); }
    return r;
  })));
});
