import fb from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCIfue2dZL8DXAy0_bFHVZ28FVCFkP1bRg",
  authDomain: "plink-1aa14.firebaseapp.com",
  databaseURL: "https://plink-1aa14.firebaseio.com",
  projectId: "plink-1aa14",
  storageBucket: "plink-1aa14.appspot.com",
  messagingSenderId: "606643665699",
  appId: "1:606643665699:web:d7cb324641670d75dbea96",
};
fb.initializeApp(firebaseConfig);
const messaging = fb.messaging();

export const getToken = (setTokenFound) => {
  // const messaging = firebase.messaging();
  // return messaging
  //   .getToken({
  //     vapidKey:
  //       "BFsYYgsm96Y18uPjfXNOFQuTOgcTKcjMDc811okfuFrnRse52RFxsXQiNniCPmOLKcB-m_soyKRYXoRE_IHyYhc",
  //   })
  //   .then((currentToken) => {
  //     if (currentToken) {
  //       console.log("current token for client: ", currentToken);
  //       setTokenFound(true);
  //     } else {
  //       console.log("No registration token availble");
  //       setTokenFound(false);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log("token err ", err);
  //   });
  if (localStorage.getItem("notification-token")) {
    setTokenFound(true);
    console.log("current token for client: ", localStorage.getItem("notification-token"));
  }
};

export const askForPermissionToReceiveNotification = async (updateToken) => {
  try {
    // await messaging.requestPermission();
    // const token = await messaging.getToken();
    // console.log("get Token  : ", token);
    // //localStorage.setItem("notification-token", token);
    // updateToken(null);
    // return token;
    Notification.requestPermission().then(async (result) => {
      if (result === "granted") {
        const token = await messaging.getToken();
        console.log("get Token  : ", token);
        //localStorage.setItem("notification-token", token);
        updateToken(token);
        return token;
      }
    });
  } catch (error) {
    console.error("askForPermissionToReceiveNotification error ", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
