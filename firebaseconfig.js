// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

  const firebaseConfig = {
  apiKey: "AIzaSyBbq0tDMH4vXUwBGTA1z_4KqfCQjqEhSLI",
  authDomain: "dose-mate-70662.firebaseapp.com",
  projectId: "dose-mate-70662",
  storageBucket: "dose-mate-70662.firebasestorage.app",
  messagingSenderId: "222253636993",
  appId: "1:222253636993:web:56db06bd0f02c5df6b5c80",
  measurementId: "G-8J00WNZK0F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
