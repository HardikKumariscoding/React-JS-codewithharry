import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // Whether darkMode is enabled or no
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState('default')



  const showAlert = (message, type) => 
    {
      setalert({
        msg: message,
        type: type 
      }),
      setTimeout(() => {
        setalert(null)
      }, 1000);

    };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");

    }
  };

  const toggleColor=()=>{
    if(color === 'default' && mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "grey";
        showAlert("DEFAULT Dark mode has been enabled", "success");

  } else if(color === 'default' && mode === 'dark'){
    setMode("light");

    document.body.style.backgroundColor = "white";
    showAlert(" DEFAULT Light mode has been enabled", "success");
      }
  }




  return (
    <>
      <Navbar titttle="TextUtils22" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm  showAlert={showAlert}  heading="Enter the text to analyze" mode={mode} />

        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
