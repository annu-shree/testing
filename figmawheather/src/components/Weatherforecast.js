import React from 'react'
import { API_FORECAST_WEATHER_BY_COORDS } from '../components/API';
//import { getCurrentLocation } from '/.utils';
 import {useData} from "../context/DataContext" 
 import { getCurrentLocation } from "../utils";

const Weatherforecast = (props) => {
 
const {data,coods,Forecast,setForecast}=useData();
//const {type,temp,date }
  
  return (
    <div>
      <div className="cards">
        <div className="c1">
          <div className="daydate"> Tommorow</div>
          <div className="wthrimg">
            <img
              src="./wheather-image/Sleet.png"
              width="50px"
              height="50px"
              alt =""
            ></img>{" "}
          </div>
          <div className="temptr">
            <div className="max_temp">16°C</div>
            <div className="min_temp">11°C</div>
          </div>
        </div>

        <div className="c2">
          <div className="daydate">Sun,7Jun </div>
          <div className="wthrimg">
            <img
              src="./wheather-image/Sleet.png"
              width="50px"
              height="50px"
              alt = ""
            ></img>{" "}
          </div>
          <div className="temptr">
            <div className="max_temp">16°C</div>
            <div className="min_temp">11°C</div>
          </div>
        </div>

        <div className="c3">
          <div className="daydate"> Mon,8Jun</div>
          <div className="wthrimg">
            {" "}
            <img
              src="./wheather-image/Thunderstorm.png"
              width="50px"
              height="50px"
              alt =""
            ></img>
          </div>
          <div className="temptr">
            <div className="max_temp">16°C</div>
            <div className="min_temp">11°C</div>
          </div>
        </div>

        <div className="c4">
          <div className="daydate"> Tue,9Jun</div>
          <div className="wthrimg">
            <img
              src="./wheather-image/Clouds.png"
              width="50px"
              height="50px"
              alt = ""
            ></img>{" "}
          </div>
          <div className="temptr">
            <div className="max_temp">16°C</div>
            <div className="min_temp">11°C</div>
          </div>
        </div>

        <div className="c5">
          <div className="daydate">Wed,10Jun </div>
          <div className="wthrimg">
            <img
              src="./wheather-image/HeavyRain.png"
              width="50px"
              height="50px"
              alt =""
            ></img>{" "}
          </div>
          <div className="temptr">
            <div className="max_temp">16°C</div>
            <div className="min_temp">11°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherforecast;
