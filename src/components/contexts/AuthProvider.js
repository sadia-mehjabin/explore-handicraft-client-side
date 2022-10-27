import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // const [id, setId] = useState();

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const githublogin = (githubprovider) => {
        return signInWithPopup(auth, githubprovider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // useEffect(() =>{
    //     fetch('http://localhost:5000/courses')
    //     .then(res => res.json())
    //     .then(data => data.find(d => d))
        
    // })

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {user, providerLogin, createUser, signIn, githublogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;