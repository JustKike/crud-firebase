import { ref, onUnmounted } from 'vue';
import "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyAFohaANNW-bTgkxiTcT4DZSRmdMssJUOo",
    authDomain: "es1-prueba.firebaseapp.com",
    databaseURL: "https://es1-prueba-default-rtdb.firebaseio.com",
    projectId: "es1-prueba",
    storageBucket: "es1-prueba.appspot.com",
    messagingSenderId: "81121797298",
    appId: "1:81121797298:web:9ad8873cab11c80caa15ab",
    measurementId: "G-97BSW8LHFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);