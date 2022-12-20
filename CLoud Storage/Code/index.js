import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";;
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getStorage ,ref,uploadBytes,uploadString,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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
const storage = getStorage(app);
const storageRef = ref(storage);
const imageRef = ref(storage,'images/');
const auth = getAuth(app);


// Create a child reference
//const imagesRef = ref(storage, 'images/'+);




function uploadImageCloud(file){
    const imageRef = ref(storage,file);
    uploadBytes(imageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

}
/*document.getElementById('submit').addEventListener('click',async function(e){
      e.preventDefault();
      const file = document.getElementById('img_input').files[0].name;
      getActualImage(file);
})*/


function previewFile(file) {


  const reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;

}
document.getElementById('UploadFile').addEventListener('click',function(e){
  e.preventDefault();
  let message;
  let file = document.getElementById('preview').files[0];
  const reader = new FileReader();
  const id = Date.now()+Math.floor(Math.random());

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    let user = auth.currentUser;
    message = reader.result;
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
    });
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
  console.log(id);
  

 
}
)


