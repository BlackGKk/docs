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
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e0c8b9c24dccd7fa3c03835e18a5767f"
  },
  {
    "url": "about.html",
    "revision": "5b319efae6820cf01c865e858e226976"
  },
  {
    "url": "assets/css/0.styles.765b385d.css",
    "revision": "066dc47832b6fcd1b5b75895dcf72991"
  },
  {
    "url": "assets/img/favicon.png",
    "revision": "0072566acbbc05f92380d8c0880956c0"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.414dc895.js",
    "revision": "3d9e1ad35b1719841f067794273d39cc"
  },
  {
    "url": "assets/js/2.fda35024.js",
    "revision": "29d67ac26a4e6da5aa22fd7b71f19c15"
  },
  {
    "url": "assets/js/3.b0af1aa6.js",
    "revision": "824cf534008de0e17388bb35a5f69661"
  },
  {
    "url": "assets/js/4.c8e8eacd.js",
    "revision": "9c0283f6f1d3c6edec24a29eee74318e"
  },
  {
    "url": "assets/js/5.7cbac540.js",
    "revision": "9dcf26abb3955e6dfa9e6218921e9ff8"
  },
  {
    "url": "assets/js/6.b73305e9.js",
    "revision": "a4268274efebf5ab50e4f07a67ae8eb8"
  },
  {
    "url": "assets/js/7.76e1ad8a.js",
    "revision": "cb65cc5b2396518c09b1fd348a748fbd"
  },
  {
    "url": "assets/js/8.86182192.js",
    "revision": "0541f40d2d9240bae2d121288f3af2b3"
  },
  {
    "url": "assets/js/9.761c95b7.js",
    "revision": "21dba5e1598f6b2ce967f25c3cf1b5c5"
  },
  {
    "url": "assets/js/app.62b264ed.js",
    "revision": "817d7adfcc609088c8b42d8fc3a53242"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "273cad49341e271cc840b3feda2ccf8e"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "e21dcbb8e4899c56bf21d1f24ec60364"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "8f7c19d2f30d205f81b5c46936d74823"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d0b0aeecbf67e81d789bf956223e189a"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "72b284a976125a1feed9ef7d379c1541"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "bc1a2304bfd6dd69b281f0361a400e89"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "e37ab3b883595cc03a822c7c8d97a4b6"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "cd74c6db454f2b48ab2aa0cfaa97a785"
  },
  {
    "url": "index.html",
    "revision": "0f47d6381f701295f90407a9d18cf46d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
