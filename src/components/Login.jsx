import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
const provider = new GoogleAuthProvider();



const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {// Googleでログイン
      localStorage.setItem("isAuth", true);// ローカルストレージにログインしている状態を保存
      setIsAuth(true);
      navigate("/");
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

