const CACHE="dutypro-v1"

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE).then(c=>{
return c.addAll([
"./",
"./index.html"
])
})
)
})

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>{
return r||fetch(e.request)
})
)
})
