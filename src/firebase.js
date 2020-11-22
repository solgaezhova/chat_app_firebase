import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDoYTt1dmFst8pUFUPcbn2dHqUCJgokLE8",
  authDomain: "whatsappclone-478ff.firebaseapp.com",
  databaseURL: "https://whatsappclone-478ff.firebaseio.com",
  projectId: "whatsappclone-478ff",
  storageBucket: "whatsappclone-478ff.appspot.com",
  messagingSenderId: "1059292530155",
  appId: "1:1059292530155:web:d1a63aff52cf39b39605ae",
  measurementId: "G-CPXVDBV3J4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;