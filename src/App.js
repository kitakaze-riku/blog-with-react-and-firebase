import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home';
import Logout from './components/Logout';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Navber from './components/Navber';


function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/createpost' element={<CreatePost />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
