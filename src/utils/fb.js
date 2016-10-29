import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCKaOqPQWcvLqPBdsHMfZYduFRTSr_KUxU",
  authDomain: "bling-react.firebaseapp.com",
  databaseURL: "https://bling-react.firebaseio.com",
  storageBucket: "bling-react.appspot.com",
  messagingSenderId: "555289992877"
};

const db = Firebase.initializeApp(config).database();
export default db;