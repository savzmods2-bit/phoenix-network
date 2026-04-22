// This pulls in the core Scramjet logic from the server
importScripts("/scram/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

self.addEventListener("fetch", (event) => {
  event.respondWith(async () => {
    // Wait for the engine to load its settings
    await scramjet.loadConfig();

    // If the request is meant for the proxy, handle it
    if (scramjet.route(event)) {
      return scramjet.fetch(event);
    }

    // Otherwise, let the browser handle it normally
    return fetch(event.request);
  });
});
