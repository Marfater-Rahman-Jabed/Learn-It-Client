import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/FIrebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const ContextApi = ({ children }) => {

    const [user, setUser] = useState()

    const Registered = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        return signOut(auth);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);

        })

        return () => {
            unsubscribe();
        }



    }, [])



    const AuthInfo = { user, Registered, Login, LogOut, updateUserProfile, googleSignIn, gitHubSignIn }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;