// Check if service workers are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://wyattcolyn.github.io/notifymycrypto/client/sw.js', {
    scope: '/',
  });
}
