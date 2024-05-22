import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import { useAxiosPublic } from "../Hook/useAxiosPublic";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
         setLoading(true)
         return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        if(currentUser){
            //   assign local store, in memory,
            const userInfo = {email: currentUser?.email}
            axiosPublic.post('/jwt', userInfo)
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem('token', res.data.token)
                }
            })
        }
        else{
            // do something (remove token)
            localStorage.removeItem('token')
        }
        setLoading(false)
    })

    return ()=>{
        unsubscribe()
    }
},[axiosPublic])


const authInfo = {
    user, setUser,
    loading, createUser,signIn,logOut,updateUserProfile, googleSignIn,
}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
