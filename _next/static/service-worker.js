self.__precacheManifest = [
  {
    "url": "/spyfall/_next/static/SzJ5thPop-8qq6lxzvPff/pages/_app.js",
    "revision": "002c3674999e54d6da4c"
  },
  {
    "url": "/spyfall/_next/static/SzJ5thPop-8qq6lxzvPff/pages/_error.js",
    "revision": "354a97e3f75ff71c06df"
  },
  {
    "url": "/spyfall/_next/static/SzJ5thPop-8qq6lxzvPff/pages/index.js",
    "revision": "1b71fc451ee2d78c06ee"
  },
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
    "url": "/spyfall/_next/static/runtime/main-b056f86990f7f4e3604f.js",
    "revision": "0c84cbff3021dfa5e3cf"
  },
  {
    "url": "/spyfall/_next/static/runtime/polyfills-29b7810566e8516cb3f7.js",
    "revision": "ff1f8c43fbee97090a39"
  },
  {
    "url": "/spyfall/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
    "revision": "339869abd27a67efd9af"
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
