// public/firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBYdJI4kg8TUz_3t7cEBUFCpDo57wDPciM",
  authDomain: "learnreact-365dc.firebaseapp.com",
  databaseURL: "https://learnreact-365dc-default-rtdb.firebaseio.com",
  projectId: "learnreact-365dc",
  storageBucket: "learnreact-365dc.firebasestorage.app",
  messagingSenderId: "143848960854",
  appId: "1:143848960854:web:41c7cdd6da76a373121cf7",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo192.png",
  });
});
