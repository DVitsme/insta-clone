import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed/seed';

const firebaseConfig = {
  apiKey: 'AIzaSyAhd7DtuYQVtfiqYPKJnLkaF496C_9XbII',
  authDomain: 'derricks-instagram-clone.firebaseapp.com',
  projectId: 'derricks-instagram-clone',
  storageBucket: 'derricks-instagram-clone.appspot.com',
  messagingSenderId: '511229551122',
  appId: '1:511229551122:web:70579694a2227877c9eecb',
  measurementId: 'G-4XL2JNWFML'
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
