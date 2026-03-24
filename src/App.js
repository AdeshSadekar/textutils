import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
// import Datatable from './Components/Datatable';
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = "Textutils - Dark Mode"
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = "Textutils - Light Mode"
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  };
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About TextUtils" />; */}

      {/* <Router> */}
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyse below"
                  mode={mode}
                />
              {/* }
            />
          </Routes> */}
        </div >
      {/* </Router> */}
      {/* <About /> */}

      {/* <Datatable/> */}
    </>
  );
}
export default App;
