import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.confige";
const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile =(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    }


    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log('Current user', currentUser)
            setLoading(false)
        })
        return()=>{
            return unsubscribe()
        }
    },[])


    const userInfo= {
        user,
        loading,
        createUser,
        logInUser,
        logOut,
        updateUserProfile 
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;