(function() {
  "use strict";

  if (! navigator.serviceWorker) {
    return;
  }

  navigator.serviceWorker.register("/bookshelf-worker.js", {"scope": "/"}).then(function(registration) {
    console.log("Serviceworker registration successful with scope: " + registration.scope);
  }).catch(function(error) {
    console.error(error);
    if (! error.trace) {
      return;
    }
    error.trace.split("\n").forEach(function(line) {
      console.error(line);
    });
  });
})();
