import Weather from "./Weather";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by <span>Zarela G.</span> and is {""}
          <a
            href="https://github.com/zarela23/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
