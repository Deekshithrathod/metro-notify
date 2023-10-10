self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        // Add paths to assets you want to cache
        "/",
        "/index.html",
      ]);
    })
  );
});
