import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by Jacinda Ashley-Jones and is{" "}<a href="https://github.com/ashleyjonesja/weather-react" target="_blank" rel="noreferrer">
        open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
