import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div>
        <Weather />
        <footer>
          This project was coded by Zarela G. & is{" "}
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
