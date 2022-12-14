// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

var firebaseConfig = {
  apiKey: "AIzaSyB-pVD6XhFy7Dmt8FaUuPtvjLjl7YGvH4c",
  authDomain: "eletronjs-chatapp.firebaseapp.com",
  projectId: "eletronjs-chatapp",
  storageBucket: "eletronjs-chatapp.appspot.com",
  messagingSenderId: "628582937107",
  appId: "1:628582937107:web:b3ffb34d0d83be055fc5e6"
};


firebase.initializeApp(firebaseConfig);


var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');



// firebase.auth().signInWithRedirect(provider);

//Signup Function
let signUpButton = document.getElementById('signInBtn');
console.log(signUpButton)


function signIn() {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}


