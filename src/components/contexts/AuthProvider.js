import React, { createContext } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';
// export const AuthContext = createContext();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = {displayName: 'batas ali'}

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const authInfo = {user, providerLogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;