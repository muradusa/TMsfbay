import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDWHU0EqQZJm3yLE4s4H097kLutUUsIYUY",
    authDomain: "tmsfbay.firebaseapp.com",
    databaseURL: "https://tmsfbay.firebaseio.com",
    projectId: "tmsfbay",
    storageBucket: "tmsfbay.appspot.com",
    messagingSenderId: "464557700656",
    appId: "1:464557700656:web:8c46f66079421d837f9ff5",
    measurementId: "G-M4TQW7E9NN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { auth, db, storage };
