import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Navber>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Navber>
    </div>
  );
}

export default App;
