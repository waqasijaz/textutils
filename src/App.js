// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react/cjs/react.development";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // To check if dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.body.text.color
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils App"
        about="About App"
        mode={mode}
        toggleMode={toggleMode}
      />
       
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter Your Text Here To Analyze" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
