import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKci2BLtzDz4HHUEIRitz7JeTSXIIhvZ8",
  authDomain: "whatsapp-clone-8bfb0.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-8bfb0.firebaseio.com",
  projectId: "whatsapp-clone-8bfb0",
  storageBucket: "whatsapp-clone-8bfb0.appspot.com",
  messagingSenderId: "1053411534457",
  appId: "1:1053411534457:web:145eb158c0aea1b2eb16a8",
  measurementId: "G-LBKHXYEPLM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
