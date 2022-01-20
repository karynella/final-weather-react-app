import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row" mt-3>
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.data.icon}
              alt="mostly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">•C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Rain: {props.data.rain}%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
