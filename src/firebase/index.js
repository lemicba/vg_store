import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp ({
    apiKey: "AIzaSyBNQzK50ILnFVwWN0ids7HCipLbSTc70KI",
    authDomain: "vgstore-93d20.firebaseapp.com",
    projectId: "vgstore-93d20",
    storageBucket: "vgstore-93d20.appspot.com",
    messagingSenderId: "532957449879",
    appId: "1:532957449879:web:35227c116908d99aa323d2"
  });

  export function getFirebase() {
      return app;
  }
  export function getFirestore() {
      return firebase.firestore(app);
  }
  export function handleFirebase() {
      return firebase
  }