import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgaVbhPjXxu6gCm5EB896Wck0JZHMP0Mw",
  authDomain: "energy-meter-a4821.firebaseapp.com",
  projectId: "energy-meter-a4821",
  storageBucket: "energy-meter-a4821.appspot.com",
  messagingSenderId: "988779000038",
  appId: "1:988779000038:web:277fb8d4cdb7d380dc8b27",
  measurementId: "G-2BMM0X275N",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);
