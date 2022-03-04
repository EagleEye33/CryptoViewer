// Check if service workers are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

const publicVapidKey = 'BIAUP5hSHtnQGZvpPNVDWnxZ5S8155ugX7xDQ2JGRaZ3H_cLbXrpHmpCbxzCaEy2yzd2y-5K1CP75kp28kBsisQ';

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

  await fetch('/subscription', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json',
    },
  });
};

window.unsubscribe = async () => {
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.getSubscription();
  if (!subscription) return;

  const { endpoint } = subscription;
  const response = await fetch(`/subscription?endpoint=${endpoint}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
};