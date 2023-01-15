
import './App.css';
import About from './components/About';
//import Footer from './components/Footer';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React,{useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
const [mode , setMode]= useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background="linear-gradient(45deg,rgb(92,92,92) 50%, rgb(27,27,27)50%)";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils- Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.background="linear-gradient(45deg,rgb(241,241,241) 50%, rgb(158,232,255)50%)";
      showAlert("Light mode has been enabled","success");
    }
  };
  return (
   <>
   <Router>
    {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element= {<About/>} >
    </Route>
    <Route exact path="/"element={ <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
    </Route>
    </Routes>
  
    </div>
    {/*<About/>*/}
    </Router>
    
   
   </>
  );
}

export default App;
