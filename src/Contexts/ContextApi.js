import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/FIrebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const ContextApi = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light-theme')

    const Registered = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        return signOut(auth);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const toggled = () => {
        // alert('hi')
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        }
        else {
            setTheme('light-theme')
        }

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unsubscribe();
        }
    }, [])



    const AuthInfo = { user, loading, Registered, toggled, theme, Login, LogOut, updateUserProfile, googleSignIn, gitHubSignIn }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;