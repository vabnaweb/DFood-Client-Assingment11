import { getAuth, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    // --------- using google to sign in---------
    const SignInUsingGoogle = () => {

        return signInWithPopup(auth, Googleprovider)

    }
    const handleName = (e) => {
        setName(e.target.value)

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }




    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }, [])
    }
    return {
        SignInUsingGoogle,
        user,
        logOut,
        handleName,
        setUserName,
        isLoading,
        error
    }


};
 export default useFirebase;