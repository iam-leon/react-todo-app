import React from "react"          // line 1 to 6 imports react and react-dom libraries and renders them to the index.html element with
import ReactDOM from "react-dom/client"   // attribute of "root". This index.js is the entry point for the display
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)