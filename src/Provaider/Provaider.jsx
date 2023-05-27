import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLocation } from 'react-router-dom';
export const AuthProvaider = createContext(null);

const auth = getAuth(app);

const Provaider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // const location=useLocation()

    const gmailPassLogin = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    // const gmailLogin=(email , password)=>{

    // }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting 
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        gmailPassLogin,
        signIn,
        logOut
    }
    return (
        <AuthProvaider.Provider value={authInfo}>
            {children}
        </AuthProvaider.Provider>
    );
};

export default Provaider;