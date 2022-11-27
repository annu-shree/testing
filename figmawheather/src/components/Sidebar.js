import React from "react";
import moment from "moment";
import { useData } from "../context/DataContext";
import { getCurrentLocation } from "../utils";


const Sidebar = (props) => {
  
  const { data, setOpen, tempunit, setCoods, setFetchType } = useData();
  const { type, temp, location, date } = data
 
  function openSearch() {
    setOpen(true);
  }


  return (
    <div className="sidebar">
      <div className="searchpannel">
        <button className="searchbutton" onClick={openSearch}>
          Search for location
        </button>

        <div
          className="sideicon"
          onClick={async () => {
            getCurrentLocation().then(async (res) => {
              console.log(res);
              const { latitude, longitude } = res.coords
              setCoods({
                latitude , longitude
              })
              setFetchType(true)
            });
          }}
        >
          <i>
            <span class="material-symbols-outlined">my_location</span>
          </i>
        </div>
      </div>

      
        <div className="wthrimg">
          <img
            src={`./wheather-image/${type}.png`}
            width="150px"
            height="150px"
            alt=""
          ></img>
        </div>
        <div className="tempinfo">
          {temp}
          {tempunit}
        </div>

        <div className="tempstatus">
          <h3>{type}</h3>
        </div>
        <div className="date">
          {" "}
          <h5>{moment.unix(date).format(`ll`)}</h5>
        </div>
        <div className="location">
          <i>
            <span class="material-symbols-outlined">location_on</span>
          </i>
          <div>
            {" "}
            <h6>{location}</h6>{" "}
          </div>
        </div>
      </div>
    
  );
};

export default Sidebar;
