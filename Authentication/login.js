// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, ref, set,get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhEqjYfo3aL2_ZXBrCjFZ_YccwN9DwmhY",
  authDomain: "fir-demo-59392.firebaseapp.com",
  databaseURL: "https://fir-demo-59392-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-demo-59392",
  storageBucket: "fir-demo-59392.appspot.com",
  messagingSenderId: "123732516785",
  appId: "1:123732516785:web:3f32ef2e5b624a508de790",
  measurementId: "G-D8FWBKJN2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getDatabase();
document.getElementById("login").addEventListener('click',function(){
    let email = document.getElementById('mailLog').value;
    let pwd = document.getElementById('pwdLog').value;
    signInWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('Sign In successful');
      location.href='page1.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Account Doesnt Exist!");
    });

})