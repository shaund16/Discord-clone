import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCsQQdTsc0Kw8ZzRiRD8sFtw6I3Jj3kh3g",
  authDomain: "discord-clone-51b36.firebaseapp.com",
  projectId: "discord-clone-51b36",
  storageBucket: "discord-clone-51b36.appspot.com",
  messagingSenderId: "1036879430302",
  appId: "1:1036879430302:web:38b2086380e29bf88a318f",
  measurementId: "G-8TNHZFZS26"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;