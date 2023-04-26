import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6w-y1fUmDEFPYqFg3TYlbm3ZBychvY6s",
  authDomain: "chat-app-97d81.firebaseapp.com",
  projectId: "chat-app-97d81",
  storageBucket: "chat-app-97d81.appspot.com",
  messagingSenderId: "326391693488",
  appId: "1:326391693488:web:22f4396551d10a71c83b75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
