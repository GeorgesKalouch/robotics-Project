// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const token = await getToken(messaging, {
  vapidKey:
    "BLMDrLsn2hRagx_Sl5fc-6jt9aQGAMFKVh7t72oj0q2e6F47L_-hWwULytG-75etmTxc1z6-JEcmg29on4zfWcs",
});

const firebaseConfig = {
  apiKey: "AIzaSyBYdJI4kg8TUz_3t7cEBUFCpDo57wDPciM",
  authDomain: "learnreact-365dc.firebaseapp.com",
  databaseURL: "https://learnreact-365dc-default-rtdb.firebaseio.com",
  projectId: "learnreact-365dc",
  storageBucket: "learnreact-365dc.firebasestorage.app",
  messagingSenderId: "143848960854",
  appId: "1:143848960854:web:41c7cdd6da76a373121cf7",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
    console.log("FCM Token:", token);
    // Send this token to your server to push messages to this client
  } catch (err) {
    console.error("Error getting FCM token", err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
