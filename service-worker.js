"use strict";var precacheConfig=[["/localweather-react/index.html","7adcf030683980437d612ef27bb1ba30"],["/localweather-react/static/css/main.9f75e350.css","3ff65fc5742fbc46268c9f471b00527e"],["/localweather-react/static/js/main.3c5794c8.js","7330c3c45d479e63bd73e47a69c943ff"],["/localweather-react/static/media/clear-day.2b2f6f27.jpg","2b2f6f27907f4a3ea438446884440e27"],["/localweather-react/static/media/clear-night.5208d8a9.jpg","5208d8a915d6f477ad071854dff6f8a2"],["/localweather-react/static/media/cloudy-night.3f923113.jpg","3f923113cbeb3d5f2c5d51bbefeb5373"],["/localweather-react/static/media/cloudy_day.73d0d5d8.jpg","73d0d5d8cc3c3df74f36fe91e75d91c4"],["/localweather-react/static/media/fog.77f0e970.jpg","77f0e970197ee854ddf3b37fd573b564"],["/localweather-react/static/media/rain.39ee0d4c.jpg","39ee0d4cd0e48fd8f52ef7605822f95a"],["/localweather-react/static/media/sleet.48bf8d40.jpg","48bf8d4018790073f31e4f018c3b58d6"],["/localweather-react/static/media/snowflake.14000807.jpg","140008079bc09da2ae42c7ad71077433"],["/localweather-react/static/media/weather.70458605.ico","704586055f457d17eaac662355531894"],["/localweather-react/static/media/wind.36bc4a15.jpg","36bc4a1500b45f2cf53590cc8ac2eb1b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/localweather-react/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});