import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          Coded by <a href="http://www.karyn.fun">Karynella</a> and is{" "}
          <a
            href="https://github.com/karynella/final-weather-react-app"
            target="blank"
          >
            Open source code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
