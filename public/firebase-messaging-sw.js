importScripts("https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js");
var firebaseConfig = {
  apiKey: "AIzaSyCIfue2dZL8DXAy0_bFHVZ28FVCFkP1bRg",
  authDomain: "plink-1aa14.firebaseapp.com",
  databaseURL: "https://plink-1aa14.firebaseio.com",
  projectId: "plink-1aa14",
  storageBucket: "plink-1aa14.appspot.com",
  messagingSenderId: "606643665699",
  appId: "1:606643665699:web:d7cb324641670d75dbea96",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Receved background message", payload);

  const notiftitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration, showNotification(notiftitle, notificationOptions);
});
