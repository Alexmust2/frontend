import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA44dGXZTxHO1W-EeFvDlfmOl0uZ88ldEU",
  authDomain: "forum-b0653.firebaseapp.com",
  projectId: "forum-b0653",
  storageBucket: "forum-b0653.appspot.com",
  messagingSenderId: "980775877284",
  appId: "1:980775877284:web:514c7c94df688c86de8431",
  measurementId: "G-WKZ0DV7Z44"
};



const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

createApp(App).use(router).mount('#app')