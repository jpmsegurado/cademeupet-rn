import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDA0Ff4pKwvctBFwOfeebOY9DHfpraSV6s",
  authDomain: "cademeupet-9e92f.firebaseapp.com",
  databaseURL: "https://cademeupet-9e92f.firebaseio.com",
  projectId: "cademeupet-9e92f",
  storageBucket: "cademeupet-9e92f.appspot.com",
  messagingSenderId: "1089022243588"
};

const app = firebase.initializeApp(config);
export const db = firebase.firestore(app);
export const auth = firebase.auth(app);