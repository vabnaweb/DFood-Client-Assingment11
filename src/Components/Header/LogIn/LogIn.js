import { Button } from 'react-bootstrap';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';





const LogIn = () => {
    const{SignInUsingGoogle}=useAuth();
    const history = useHistory()
    const location = useLocation()
    
    const redirectUri = location.state?.from || "/home"

    const handleGoogleSignIn = () => {
      SignInUsingGoogle()
            .then(result => {
                history.push(redirectUri)
            })
    }
    // const{SignInUsingGoogle}=useFirebase();
    return (
        <div>
           <Button onClick={handleGoogleSignIn} handleGoogleSignInclassName="me-4" title="Google sign in"> <i className="fab fa-google"></i> Google Sign in</Button>
        </div>
    );
};

export default LogIn;