import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
