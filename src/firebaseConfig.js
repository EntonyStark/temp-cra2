import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAAdN5kpOg5rx6q2ocluadzmmV_vcQM0Lw',
  authDomain: 'first-fly.firebaseapp.com',
  databaseURL: 'https://first-fly.firebaseio.com',
  projectId: 'first-fly',
  storageBucket: 'first-fly.appspot.com',
  messagingSenderId: '221333478401',
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
