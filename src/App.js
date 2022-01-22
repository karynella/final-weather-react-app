import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          <a
            href="https://github.com/karynella/final-weather-react-app"
            target="blank"
          >
            Open source code
          </a>{" "}
          by Karynella{" "}
          <a
            href="https://www.linkedin.com/in/karyn-pearce-88a85493/"
            target="blank"
          >
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/390/original/Linkedin-logo-1-550x550-300x300.png?1642869308"
              alt="LinkedIn"
              width="20"
            />
          </a>{" "}
          <a href="https://www.instagram.com/karynella/" target="blank">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/025/389/original/5772032.png?1642869242"
              alt="Instagram"
              width="17"
            />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
