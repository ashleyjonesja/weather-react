import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
