import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpycHTdWMfgH2ekS1jhl1lCbv-BGldm4w",
    authDomain: "loginestagio-73567.firebaseapp.com",
    projectId: "loginestagio-73567",
    storageBucket: "loginestagio-73567.appspot.com",
    messagingSenderId: "552940016050",
    appId: "1:552940016050:web:fe5eeb013f7d98cd1154ab",
    measurementId: "G-YE6B9VLZXL"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database