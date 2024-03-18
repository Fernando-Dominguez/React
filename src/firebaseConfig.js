
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAkHgOJxSb29wIXgf_6VD3hkZsqnK0b_hI",
    authDomain: "entrega-final-react-fd.firebaseapp.com",
    projectId: "entrega-final-react-fd",
    storageBucket: "entrega-final-react-fd.appspot.com",
    messagingSenderId: "13772819212",
    appId: "1:13772819212:web:517dffd0644477531ad729"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)