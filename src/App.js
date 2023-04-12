import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home';
import Logout from './components/Logout';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Navber from './components/Navber';
import { useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';


function App() {
  // ログインしているかどうかの状態変数をsetIsAuthで管理　ログインしていなかったらfalse
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Navber isAuth={isAuth} />{/* ログイン状態を渡す */}
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />}></Route>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route> {/*ログイン状態管理関数をlogin.jsxに渡す*/}
        <Route path='/logout' element={<Logout setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
