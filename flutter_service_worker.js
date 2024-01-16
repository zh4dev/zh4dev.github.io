'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "466e8ce0bf2e08c3eb2cbf39e2930da1",
"index.html": "49e67b6272e06ffe572f140b3d8bac85",
"/": "49e67b6272e06ffe572f140b3d8bac85",
"main.dart.js": "eaa56e933b7822ad20a9fb0b5a4111f9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "20c90cda70ae349f8af1520596a8821a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dce7e1f24ff518b2adb4ca18edc6fc69",
".git/config": "cec176e065261c220f25f469c3fcbe00",
".git/objects/0d/f9312f1ab8cec1de0f272f2f8dcf8770ad249e": "1ee24671872825dcffd70f714576f7a0",
".git/objects/95/850ffc5d4f2a8877048a2c61b2d80d36ed4f7b": "c24f79fd907c3a62900c82cf7a899f85",
".git/objects/3e/001f513c2f71c652a66cd4ef34361d9ecc36a4": "a32ef48dd48189da97766085730a6bd5",
".git/objects/68/17e0a59270b1050ad6eb3eef6cbc37dd5397e4": "8ef85a4db27e5b220d7c08ee1c56a6fa",
".git/objects/03/75f66ecda4b6a2e4b9edacf0bad07a40d0e10c": "16454b30797a0e8a1044089a0d9ff230",
".git/objects/03/b7ca74e375d99abed468ae3f58f2729e12e9c7": "4f59bb745fa96a5cdcc2248d059542a6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/51/a3af53a8387c62a40cd92ff33351eb77f0e9df": "3fe70100cd3c9746fa27c7ed7ed985fb",
".git/objects/3d/c15aa4a7c6711153a453ece261cb718625da7d": "9cc7decd2e0b768ca57939a8c7cc4d17",
".git/objects/d9/6998a2e6a0e9d08a6aeca5a9068b84e92382ad": "133c7c784d3a677c91b82c0c680d70ec",
".git/objects/ad/52bbf450440b3bf4bdca028b6ed8f17193ea29": "ea5f0b09189eefa63e7786d7e21b302a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/b6a1463a6122a1a209e55fb4d909e57742e795": "3904f7d6fe891353bcc4c86268fca8fb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/ae/d1888bf0ae6e668d4451917cec1db679bc8eb9": "73bb1f11b88e087dbe27a5c8c031c0c6",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/4e8fccfd24bdd57edbdb175319c38bf74b6941": "bfcb66cf0741d320b81a5922de546060",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/327a9ff2ba8b081b87ce969bca0c9df1b19b55": "0e6fb4a6dd61eaa61a7a96c935f37c09",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/16/2c4e6af37d9fbfb389a18be7139acefd56590f": "d938077deb693ec569b1a00417b191d7",
".git/objects/89/a96a4484a775aa9b9a60754adbcedd83c96031": "7bad1a07e708d556f7bf8e16d621e281",
".git/objects/8a/f895992ffdc0e9683d39ca2d0b9791834eebd3": "d6fec00adf46b9b1a352a12635ed53d5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/e65ebfc61f4191af4f39ec419a4bbcaf12a676": "0f3bc5779690d3c71674852c38f616eb",
".git/objects/4c/5edcda61a0f36c2f71c3fb377ebbbc4ac728d3": "0799451e1c8f73e2e49b81800be9ff28",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/2f/909aefdf8021a9325b5eb752e97f14afda74be": "1d77fdb99c417cf4d6b4b12814680d86",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/2cc9e9599248ee791c6cf97306496ee3734018": "e8fcd4ce95adb526f4f64baddac572c4",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/9a/8ff51a647be8903722b0c248d812cae4cc9fd1": "487ce40dca3da88f8aa03a3173f447ed",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/6d6239ad552ee76de847043b9a4f7bf2ae5d49": "eb72212a3e8e5994a8efd256e7e36e2e",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/63/41bb17c5535c0f3672a2b94aaba28c568f6d6d": "54601f9d0489d02c53fbcd7adea5c12b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/08e4a7a8e905eef9c4bac18910224ffd31db30": "78fcae7917a24a905169c424abab3536",
".git/objects/d4/3ea24fa204444ddcafb5908202be81cc5c8cab": "65fa7c1cf6db3c18a6f1b367c1d4372d",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/88bb4d891168a0e14b994a8dd1ab534583e790": "03a882c1d560aed4062dabe99d94e442",
".git/objects/a8/800f1269d39c58b81592e11e05ca9a21aaf7d8": "070ba8020ae18c04d06f3886014d09ac",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e64f7947b89c46c74bafdf34a436a14c348cf8": "60cfc0f8b4759d5f2f2fa0b633b0d67c",
".git/objects/c4/e5be498eefbeee8fbc4f6c4fdd81b7bee4cd70": "e9d9bbbd588c98c2f9c5989e479c04dc",
".git/objects/e1/1eb378cc9843906b42a2dba71d5bb52f183c4e": "1db687a229591fe0b6f019dd9ed55e89",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/35f30078e71e9c36846932442251120b30fac1": "3cf621b9c53265aae1fd388a29f7d363",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/71bf41df385a2cfeccc4e9f14044d886fab81b": "249c52e2da4b0e42bd3117d506e3d5fc",
".git/objects/83/9efb8821e0174f2b83f50002a31273b74f7b2e": "c115ab49d6838a1436776569b45187de",
".git/objects/48/bae00343346cc1a6ec6f40d0ae68c80ced28f0": "23b703df5faa0ab7152ae6f9e663ac21",
".git/objects/84/2aa73a6df593310f3ca3a186445113760b1bb8": "07dba65a10200acb22dbe10e5a067a72",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/71/b8b0ffccd75b5126221c118a1ca3bdee226a2b": "6b418cd9d07bcb77de767f5d9a4f10a0",
".git/objects/76/ad115678ae2f4baeb0d443be7422049a2359e3": "cde56c86621bee435de0ca70985f20c9",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/40/4d9ee27a48b17588b682c2b746303645903cf3": "37885847c2f607cfcac70bb5a85f6021",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e117dd9ec90e4f52da3be8795d4e1a18",
".git/logs/refs/heads/main": "4ab09a581edf44d0877db1eaf09f509b",
".git/logs/refs/remotes/origin/main": "0df7338d017e12b5ec4eed78971339c3",
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
".git/refs/heads/main": "0da92e33d985197f036edf9b2c3f9d6d",
".git/refs/remotes/origin/main": "0da92e33d985197f036edf9b2c3f9d6d",
".git/index": "f4256788165389ae37e20c098cf79ac8",
".git/COMMIT_EDITMSG": "92ac10ab3cfc637dcf3857e494279110",
"assets/AssetManifest.json": "bea7bad1664eab2d94acfd26c61ca30b",
"assets/NOTICES": "812b4fc63a85780accc74433f053a724",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a33595c660a6f3ca4f135fb2067d0164",
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
"assets/assets/icons/ic_rectangle_2.svg": "db51cd7ddc3c929e4d80cd5cde711f7d",
"assets/assets/icons/ic_check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/ic_download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/ic_polygon_1.svg": "e4f6e44a4dcbac39464fdaeab8325f1a",
"assets/assets/icons/ic_github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "77670d2c3ccafeaac2d7036587743463",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
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
