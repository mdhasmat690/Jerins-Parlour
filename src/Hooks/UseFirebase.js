import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile ,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('')
  const Googleprovider = new GoogleAuthProvider();
  const auth = getAuth();

  /* crate account */
  const createwithUserEmail = (email, password,name,location, navigate) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect_url = location?.state?.from || "/";
        navigate(redirect_url);
        const user = userCredential.user;
        setUser(user);
        setAuthError("")
        const newUser = { email, displayName: name };
        setUser(newUser);
        
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        // ..
      })
      .finally(()=>setIsLoading(false));
  };

  /* signInWithEmailAndPassword  */
  const signInPassword = (email, password,location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect_url = location?.state?.from || "/";
        navigate(redirect_url);
        const user = userCredential.user;
        console.log(user);
        setAuthError("")
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

  /* Sign in with google */
  /* const signInWithGoogle = () => {
    setIsLoading(true)
    signInWithPopup(auth, Googleprovider)  
  }; */

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, Googleprovider);
  };


  /* Observer user state */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      } 
      setIsLoading(false);
    });
    return unsubscribed;
  }, []);

  /* Log out */
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsLoading(false));
  };

  return {
    createwithUserEmail,
    signInPassword,
     signInWithGoogle,
   // handlegooglesignin,
    user,
    logOut,
    isLoading,
    authError
  };
};

export default useFirebase;
