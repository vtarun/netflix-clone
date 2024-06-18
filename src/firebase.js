import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfuAAXLTey4cQ8i0goKas3OQNMvmtww_g",
  authDomain: "vt-netflix-clone.firebaseapp.com",
  projectId: "vt-netflix-clone",
  storageBucket: "vt-netflix-clone.appspot.com",
  messagingSenderId: "929354164929",
  appId: "1:929354164929:web:502e8a0189baef8aa8c240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch(error){
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout} ;