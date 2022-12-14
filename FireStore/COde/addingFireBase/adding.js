// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { collection,doc, setDoc ,getDocs,addDoc,getFirestore}from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const cafeRef = collection(db,'cafes');
const docSnap = await getDocs(cafeRef);


function data(){
  let name = document.getElementById('ShopName').value;
  let city = document.getElementById('city').value;
  let data = {name:name,city:city}
  return data;
}

document.getElementById('adding').addEventListener('click',async function(e){
  e.preventDefault();
  await addDoc(cafeRef,data());
})

document.getElementById('ReturnHome').addEventListener('click',function(){
  
alert("Move to Home page!");
location.href="/COde/ReadingFireBase/index.html";

});