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
    "revision": "2283717b565f11e46f48752c87926e56"
  },
  {
    "url": "assets/css/0.styles.607c8ecb.css",
    "revision": "fe2aab286b7cbbc92e6bf0033c62d448"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4b0f61ca.js",
    "revision": "cda27a18709410f208b9c52b9370bad9"
  },
  {
    "url": "assets/js/3.b2fa71ef.js",
    "revision": "bb8ceafb8974aed34a3a763c7ef01149"
  },
  {
    "url": "assets/js/4.4487d67d.js",
    "revision": "f2ebfd1b4a4d0727db1e6c363600447d"
  },
  {
    "url": "assets/js/5.cf2c5d35.js",
    "revision": "7402a97a8e6a982ab22849ee165f996f"
  },
  {
    "url": "assets/js/6.b4271425.js",
    "revision": "a87ef16f34501b41a8db134ed0d1849e"
  },
  {
    "url": "assets/js/7.43ce90aa.js",
    "revision": "8c1a743af63097a54952da48317cb049"
  },
  {
    "url": "assets/js/app.35df06ba.js",
    "revision": "7899009fd5acff8343fbe552f99c4ff0"
  },
  {
    "url": "dts-webpack-plugin/index.html",
    "revision": "4dad1d1c0c632a504a86db46ca7fc2d9"
  },
  {
    "url": "index.html",
    "revision": "9d2d40df1cb386baa2c93e5e39c5ef1b"
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