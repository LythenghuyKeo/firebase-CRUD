// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { collection,doc, setDoc ,getDocs,addDoc,getFirestore,query,where,orderBy}from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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
const cafeList = document.querySelector('#cafe-list');
//create element and render cafe
function renderCafe(doc){
  //create element
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');

  li.setAttribute('data-id',doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  cafeList.appendChild(li);
}
const q = query(cafeRef,where("city", "==", 'Tokyo'), orderBy('name'));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
 renderCafe(doc);
})


document.getElementById("addShop").addEventListener('click',function(){
  location.href='/COde/addingFireBase/AddCafeShop.html';

});
document.getElementById("Deleteshop").addEventListener('click',function(){
  location.href='/COde/DeletingFireBase/delete.html';

});
document.getElementById("Updateshop").addEventListener('click',function(){
  location.href='/COde/UpdatingFireBase/update.html';

});
let resultSearch = document.querySelector('#resultSearch');

function SearchCafe(doc){
  //create element
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');

  li.setAttribute('data-id',doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  resultSearch.appendChild(li);
}
document.getElementById('searching').addEventListener('click',async function(e){
  e.preventDefault();
  const city = document.getElementById('searchCity').value;
  console.log(city);
  const q = query(cafeRef, where("city", "==", city));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
   SearchCafe(doc);
   
});
})