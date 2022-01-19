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
              autofocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Poole, UK</h1>
      <ul>
        <li>Wednesday 19:00</li>
        <li>Fog</li>
      </ul>

      <div className="row" mt-3>
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">4</span>
              <span className="unit">•C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
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
