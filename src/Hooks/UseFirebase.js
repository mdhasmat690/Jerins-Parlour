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
  const createwithUserEmail = (email, password,name) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
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
  const signInPassword = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
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
  const signInWithGoogle = () => {
    setIsLoading(true)
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setAuthError("")
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(()=>setIsLoading(false));
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
    user,
    logOut,
    isLoading,
    authError
  };
};

export default useFirebase;
