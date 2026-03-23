import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5nxim_X1c0cVXRji8-k4CkMSDPDH7v0k",
  authDomain: "zelva-c6143.firebaseapp.com",
  projectId: "zelva-c6143",
  storageBucket: "zelva-c6143.firebasestorage.app",
  messagingSenderId: "876429015791",
  appId: "1:876429015791:web:02770e67c5ce81c335391a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);