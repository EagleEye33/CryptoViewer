import webpush from 'web-push';

const publicVapidKey = 'BMrfFtMtL9IWl9vchDbbbYzJlbQwplyZ_fbv8Pei8gPNna_Dr1O-Ng7U7fy0LLqz5RKIxEytTIzyk6TLrcKbN30';
const privateVapidKey = 'FKl2taLCJMRUpAoKgYxj8DbKPuGbsQTErGmF90mOScM';

export default (): void => {
  webpush.setVapidDetails(
    'mailto:test@test.com',
    publicVapidKey,
    privateVapidKey,
  );
};