import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// React ROuter setup
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light"); // Whether darkMode is enabled or no
  const [alert, setalert] = useState(null);

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
      document.title="TextUtils Dark"
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils Light"

    }
  };

  return (
    <>
    <Router>
      <Navbar titttle="TextUtils22" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
              
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} >
          </Route>
      </Routes>
      
      </Router>
    </>
  );
}

export default App;
