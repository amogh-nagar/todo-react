import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //Component from App.js and then we imported this into our root 

ReactDOM.render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
