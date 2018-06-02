import firebase from 'firebase'
import { firestore } from 'firebase'

// Initialize Firebase
const config = {
  // Firebase api key
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();

