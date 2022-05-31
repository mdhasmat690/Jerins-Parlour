import { faL } from "@fortawesome/free-solid-svg-icons";
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
  const [adminLoading, setAdminLoading] = useState(true);
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false);


  const Googleprovider = new GoogleAuthProvider();
  const auth = getAuth();

  /* crate account */
  const createwithUserEmail = (email, password, name, location, navigate) => {
    console.log(name);
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect_url = location?.state?.from || "/";
        navigate(redirect_url);
        const user = userCredential.user;
        // setUser(user);
        setAuthError("")
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, 'POST');

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

  const signInWithGoogle = (location, navigate) => {

    setIsLoading(true);
    signInWithPopup(auth, Googleprovider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            navigate(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
  };


  /* Observer user state */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        setAdminLoading(true);
          fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              setAdmin(data.admin)
              setAdminLoading(false);

            });
      

      } else {
        setUser({});
      } 
      setIsLoading(false);
    });
    return unsubscribed;
  }, []);


  console.log("admin",admin);
 /*  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdminLoading(true);
        fetch(`https://hidden-fjord-28330.herokuapp.com/users/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setAdmin(data.admin);
            setAdminLoading(false);
          });
      } else {
      }
      setLoading(false);
    });
  }, []); */



 /*  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
         
        })
}, [user.email]) */



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



  const saveUser = (email, displayName,method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method:  method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };



  return {
    createwithUserEmail,
    signInPassword,
     signInWithGoogle,
   // handlegooglesignin,
    user,
    logOut,
    isLoading,
    adminLoading,
    authError,
    admin
  };
};

export default useFirebase;

