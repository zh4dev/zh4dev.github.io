'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "466e8ce0bf2e08c3eb2cbf39e2930da1",
"index.html": "0b841bc25b8747a506ed47d42a36985a",
"/": "0b841bc25b8747a506ed47d42a36985a",
"main.dart.js": "b76586b715a6dbe8950e5c96569a5cc3",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "20c90cda70ae349f8af1520596a8821a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dce7e1f24ff518b2adb4ca18edc6fc69",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/03/75f66ecda4b6a2e4b9edacf0bad07a40d0e10c": "16454b30797a0e8a1044089a0d9ff230",
".git/objects/03/b7ca74e375d99abed468ae3f58f2729e12e9c7": "4f59bb745fa96a5cdcc2248d059542a6",
".git/objects/02/123b14ea712b2889e6df7092fb934f612dcaa8": "2877763486213e38c1c4b9a1d4c700ff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/49c373943ed01348ce25f61f8149a2efad3bf0": "aef9ff914a70c0413906646edfa61205",
".git/objects/4d/d8d3c67add4e794881a1cc826dcedf8790ccae": "c5712f938a485faa202c8146c0f964e8",
".git/objects/43/83ac2d460a45dea2bb1b4eb7138496d558af50": "ae24b93f06bb25e36d9d37e756e49434",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d2/049a5e3c76af63ac1a587427a61cd417e6b399": "255ae0cc60d008adbaa7ed4cb783ce43",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/78/3b12a9561052b1b2806544ff164c09b1878e36": "2aa35743469c0cdcea6b347fd0976d69",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fed41749be974dd122391feacc7daecb",
".git/logs/refs/heads/master": "fed41749be974dd122391feacc7daecb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "f46ef7d206f2a2aebf345f93a71cbd74",
".git/index": "2013125dbed157ef83e87e3da78eb2bc",
".git/COMMIT_EDITMSG": "90e6141e0d213eb69afa466b3ff3fab9",
"assets/AssetManifest.json": "5b715f4e273d093cc2aa297aecced00b",
"assets/NOTICES": "9e7d50331def63ac82b10bdc285db29e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bf2ee791f78ffb58bda297326142bf41",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "b9eace0abdfdb2e23c2e10ad60318d37",
"assets/fonts/MaterialIcons-Regular.otf": "b24f101ab021183a78a7fae52cb14dde",
"assets/assets/images/avatar_hd.png": "376c3c691e371c9ce93ec7b85b79850f",
"assets/assets/images/avatar.jpg": "9038858832f7500e99c430d458df3fa1",
"assets/assets/icons/ic_ellipse_3.svg": "8f5cab7b32fe602c3a344203555b88c4",
"assets/assets/icons/ic_ellipse_2.svg": "1ebf8010f6183383577e6ac6ef60af35",
"assets/assets/icons/ic_ellipse_1.svg": "3b33e19dcb99e2d93e2ccba507168e84",
"assets/assets/icons/ic_separator.svg": "d9182bfb330f10fdd5889a25f061c34b",
"assets/assets/icons/ic_ellipse_4.svg": "3b33e19dcb99e2d93e2ccba507168e84",
"assets/assets/icons/ic_linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/ic_rectangle_1.svg": "e25b909024fe8d2626eb666f91cbb598",
"assets/assets/icons/ic_playstore.png": "dab1682d9b5f5794a8907369bd018405",
"assets/assets/icons/ic_rectangle_2.svg": "db51cd7ddc3c929e4d80cd5cde711f7d",
"assets/assets/icons/ic_check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/ic_google_drive.png": "fd194514b7b4148455ad365892a06236",
"assets/assets/icons/ic_download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/ic_polygon_1.svg": "e4f6e44a4dcbac39464fdaeab8325f1a",
"assets/assets/icons/ic_appstore.png": "06b9aeda75d96bd68f3d3b5ef4ee8c58",
"assets/assets/icons/ic_github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
