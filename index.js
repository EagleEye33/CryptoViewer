// Check if service workers are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

const publicVapidKey = 'BIJyQ6fI1si9LM9enbCk81JUO9_A3J9K1i9rkutpy805m5uBDuw_cH0d0CRq-MFiav4Lro_aReGDpZDzPB1rWko';

// Copied from the web-push documentation
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

window.subscribe = async () => {
  if (!('serviceWorker' in navigator)) return;

  const registration = await navigator.serviceWorker.ready;

  // Subscribe to push notifications
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });
};