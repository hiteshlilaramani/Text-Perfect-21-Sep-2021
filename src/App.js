import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') //Whether dark is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#052047';
      showAlert("Dark mode has been enabled", "success")
      document.title = "Text Perfect- Dark Mode"
      // setInterval(() => {
      //   document.title = "Download Now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Text Perfect App"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "Text Perfect- Light Mode"
    }
  }

  return (
    <>
      {/* <Navbar textEditor="Your Text Editor"  aboutText="About Me"/> */}
      {/* <Navbar/>   */}
      <Router>
      <Navbar textEditor="Text Perfect" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container-fluid my-3" >
        <Switch>
          {/* /users --> component-1
          /users/Home --> component-2 */}
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze Below" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>


    </>
  );
}

export default App;
