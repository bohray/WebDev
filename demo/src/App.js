import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#495057';
      showAlert('Dark Mode Enabled', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success')
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
        <Routes>
          <Route path='/about' element={<About mode={mode} />} />
          <Route path='/' element={<TextForm heading="Enter the text to analyze:" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
      </Router>  
    </>
  );
}

export default App;
