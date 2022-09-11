import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="weather-app-wrapper">
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="Submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <h1>London</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="cloudy"
            />
            6 °C
          </div>
          <div className="col-6">
            <ul>
              <li>Presipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/Viksia/My-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Viksy
      </small>
    </div>
  );
}
