// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, ref, set,get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getStorage, refe,uploadBytes,uploadString,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
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
//const db = getDatabase();
const storage = getStorage(app);
const storageRef = refe(storage);
const imageRef = refe(storage,'images/');
document.getElementById('signinGGL').addEventListener('click',function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert('Sign In successful');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
  })
});
document.getElementById("signInEMandPWD").addEventListener('click',function(){
    let mail = document.getElementById('mail').value;
    let pwd1 = document.getElementById('pwd1').value;
    let pwd2 = document.getElementById('pwd2').value;
    let password = ((pwd1===pwd2)&&(pwd1.length>6))?pwd1:alert('Wrong Password Please enter Again!');
    let file = document.getElementById('preview').files[0];
    createUserWithEmailAndPassword(auth, mail, password)
    .then(checkandInsert(mail,password,file),(userCredential) => {
      const user = userCredential.user;
      location.href='login.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
});
function InsertData(userid,mail,password){
  set(ref(db, 'users/' + userid), {
    email: mail,
    password:password,
    SignIntime:  Date()
  })
}


function checkandInsert(email,password){
  let user = auth.currentUser;
  get(ref(db,'users/'+user.uid)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("Please go to Log in Your Account is already exist");
    } else{
      alert("Register Done!");
      InsertData(user.uid,email,password);
    }
    }
  )

}
function AddImageStorage(file,id){
  let message;
  const reader = new FileReader();
  uploadString(ref(storage,'images/'+ id), message, 'data_url').then((snapshot) => {
    getDownloadURL(ref(storage, 'images/'+id))
    .then((url) => {
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
      console.log(id);
    })
    .catch((error) => {
      // Handle any errors
  });
}, false);

if (file) {
  reader.readAsDataURL(file);
}
console.log(id);

}

//document.getElementById('signinGGL').addEventListener('click',signinGoogle());
//document.getElementById('signInEMandPWD').addEventListener('click',signInEmailandpwd());











