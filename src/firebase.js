import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9Kg4xn_gExS6ZgrYagI0lbiNog0vwjyg",
    authDomain: "message-clone-yt.firebaseapp.com",
    projectId: "message-clone-yt",
    storageBucket: "message-clone-yt.appspot.com",
    messagingSenderId: "413480609522",
    appId: "1:413480609522:web:d4931fdd4eea498a9d126b",
    measurementId: "G-86EKN9YR94"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth= firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

