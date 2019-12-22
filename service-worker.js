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
    "url": "/spyfall/_next/static/runtime/main-3e73a560acc190fd51df.js",
    "revision": "323132849446a5a45285"
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
    "url": "/spyfall/_next/static/xXJfI_zUUKu8rai23Bfr-/pages/_app.js",
    "revision": "51af0b31e1574a2def98"
  },
  {
    "url": "/spyfall/_next/static/xXJfI_zUUKu8rai23Bfr-/pages/_error.js",
    "revision": "87ea20c2ea26c00f0175"
  },
  {
    "url": "/spyfall/_next/static/xXJfI_zUUKu8rai23Bfr-/pages/index.js",
    "revision": "d3d9a2defabcf15d6ccf"
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
