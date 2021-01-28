import * as firebase from 'firebase' 
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCUeb2xpRKN6RzfNeoa6YYHMUShWBSR7co",
  authDomain: "wily-app-5b3b0.firebaseapp.com",
  databaseURL: "https://wily-app-5b3b0-default-rtdb.firebaseio.com",
  projectId: "wily-app-5b3b0",
  storageBucket: "wily-app-5b3b0.appspot.com",
  messagingSenderId: "383130997532",
  appId: "1:383130997532:web:01542aa703a66e749da0d9"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();