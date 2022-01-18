import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="type city name to search"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn" />
          </div>
        </div>{" "}
      </form>
      <h1>Poole, UK</h1>
      <ul>
        <li>Wednesday 19:00</li>
        <li>Fog</li>
      </ul>

      <div className="row">
        <div className="col-4">4•</div>
        <div className="col-4">
          <ul>
            <li>Rain: 10%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 14 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
