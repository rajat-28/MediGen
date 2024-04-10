import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Hero from './components/hero';
import Landing from './components/Landing';
import Upload from './components/Upload';



function App() {
  return (
    
    <div className='App' >
      {/* <NavBar/>  */}
      
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Landing/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/upload" element={<Upload/>} />
      </Routes>
      
    </div>

    
    
  );
}

export default App;
