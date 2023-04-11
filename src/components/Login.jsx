import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';

const Login = () => {

  const loginInwithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth,provider).then((result)=> {

    });
  }
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInwithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login