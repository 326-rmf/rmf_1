let total = 0
for(var i = 0;i < 100_000_000;i++){
    total += i
}
self.postMessage({total:total})
