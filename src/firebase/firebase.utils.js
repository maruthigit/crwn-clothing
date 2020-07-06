import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZV1DOZveId1ptl6_EyGTVg_sFyf_If8k",
    authDomain: "crwn-db-dda2f.firebaseapp.com",
    databaseURL: "https://crwn-db-dda2f.firebaseio.com",
    projectId: "crwn-db-dda2f",
    storageBucket: "crwn-db-dda2f.appspot.com",
    messagingSenderId: "1053979568276",
    appId: "1:1053979568276:web:4284e9a2d518b7f6a56c81",
    measurementId: "G-CE07KTZ7E2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

