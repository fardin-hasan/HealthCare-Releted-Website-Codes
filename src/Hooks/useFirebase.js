import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [islogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // google sign in
    const signInusingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .finally(() => setIsLoading(false));
    }
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            });
    }

    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;


    }, [])


    // email and password sign in

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const toggle = (e) => {
        setIsLogin(e.target.checked);

    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(email, password);

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase');
            return;
        }
        if (password.length < 6) {
            setError('Password must be more than 6 character');
            return;
        }

        if (islogin) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setError('')
                    // ...
                })
                .catch((error) => {

                    setError(error.message);
                });
        }
        else {

            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    // Signed in 
                    const user = result.user;

                })
                .catch((error) => {

                    setError(error.message);
                    // ..
                });

        }

    }

    // const CreateWithEmaillPassword = () => {

    // }


    return {
        user,
        signInusingGoogle,
        logout,
        handleEmail,
        handleForm,
        handlePassword,
        error,
        toggle,
        islogin,
        signInWithEmailAndPassword,
        isLoading

    }




};

export default useFirebase;