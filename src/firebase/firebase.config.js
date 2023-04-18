// firebase config

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPwqhYC9pq3Zcw2UXOKVtHAeHc-yOdjZA",
  authDomain: "the-news-dragon-e8ba9.firebaseapp.com",
  projectId: "the-news-dragon-e8ba9",
  storageBucket: "the-news-dragon-e8ba9.appspot.com",
  messagingSenderId: "47472827726",
  appId: "1:47472827726:web:edd43dec6e7f73f5c3921f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
