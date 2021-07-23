import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

const Login = () => {
  const signIn = () => {
    //do google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }
  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://logovtor.com/wp-content/uploads/2020/07/discord-logo-vector.png" alt="Discord Logo" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
