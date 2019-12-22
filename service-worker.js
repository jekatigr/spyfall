self.__precacheManifest = [
  {
    "url": "/spyfall/_next/static/chunks/commons.24465533c80845e16c26.js",
    "revision": "aee9726b788ed4d112aa"
  },
  {
    "url": "/spyfall/_next/static/chunks/styles.676f84a5a82d3bf1565e.js",
    "revision": "d738bd2055300ddca091"
  },
  {
    "url": "/spyfall/_next/static/css/styles.24e1c219.chunk.css",
    "revision": "d738bd2055300ddca091"
  },
  {
    "url": "/spyfall/_next/static/runtime/main-8c389ff6b04de9ce4805.js",
    "revision": "cc12ae5120e94a5065ee"
  },
  {
    "url": "/spyfall/_next/static/runtime/polyfills-ebd4705da3402b2d78e1.js",
    "revision": "eac62969129f68ad8f31"
  },
  {
    "url": "/spyfall/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
    "revision": "339869abd27a67efd9af"
  },
  {
    "url": "/spyfall/_next/static/uizyOA_2xZofxipGqNfLo/pages/_app.js",
    "revision": "6d79beb37780c2614265"
  },
  {
    "url": "/spyfall/_next/static/uizyOA_2xZofxipGqNfLo/pages/_error.js",
    "revision": "5a3fe8632edfd42df945"
  },
  {
    "url": "/spyfall/_next/static/uizyOA_2xZofxipGqNfLo/pages/index.js",
    "revision": "c4ff1e400f9d83431f19"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
