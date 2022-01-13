import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6xDND-jRvwD032k3ZKk7UIFpxZ6DysYo",
    authDomain: "neom-photo.firebaseapp.com",
    projectId: "neom-photo",
    storageBucket: "neom-photo.appspot.com",
    messagingSenderId: "173501665589",
    appId: "1:173501665589:web:d03a6c8a39a99ea9cc7c7c"
  };

 
  
  // Initialize Firebase
 
 
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore  =firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export { projectStorage ,projectFirestore ,timestamp , firebase}
  