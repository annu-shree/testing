import React from "react";
import { useData } from "./context/DataContext";
import Weatherforecast from "./Weatherforecast";

const Dashboard = (props) => {
  
  const { data, unit, setUnit, tempunit } = useData();
const { wind, visibility, humidity, pressure } = data
  console.log(props);

  function handlefehrenite() {
    if (unit === "metric") {
      setUnit("imperial");
    }
  }
  function handlecelcius() {
    if (unit === "imperial") {
      setUnit("metric");
    }
  }

  return (
    <div className="dashboard">
      <div className="tempbutton">
        <button className="celcius" onClick={handlecelcius}>
          °C
        </button>
        <button className="fehrenite" onClick={handlefehrenite}>
          
          °F
        </button>
      </div>

      <Weatherforecast tempunit={tempunit} >
        
      </Weatherforecast>

      <div className="highlight_info">
        <div className="highlight">
          <h3> Todays Highlights</h3>
        </div>

        <div className="wh">
          <div className="windstatus">
            <div className="w1">Wind status </div>
            <div className="w2">
              <div className="w2value">{wind}</div>
              <div className="mph">mph</div>{" "}
            </div>
            <div className="w3"> wsw</div>
          </div>

          <div className="humidity">
            <div className="h1">Humidity</div>
            <div className="h2"> {humidity}%</div>
          </div>
        </div>

        <div className="va">
          <div className="visibility">
            <div className="v1">Visibility </div>
            <div className="v2">
              <h1>{visibility}</h1>
              <div className="miles">miles</div>
            </div>
          </div>

          <div className="Airpressure">
            <div className="a1">Airpressure </div>
            <div className="a2">
              <h1>{pressure}</h1>
              <div className="mb">mb</div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h6>created by username-dev chalanges.io</h6>
      </div>
    </div>
  );
};

export default Dashboard;
