import React from "react";
import { useData } from "../context/DataContext";
//import { api_current_weather_by_city } from "./components/API";

const Searchbar = (props) => {
  const { query, setQuery ,setOpen, setFetchType} = useData();

  function closeSearch() {
    setOpen(false);
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        className="search"
        value={query}
        onChange={(e) => {
        setQuery(e.target.value.trim());
        setFetchType(false)
      }}>
      </input> 
      <span></span><span></span>
      
      <button className="searchbutton2" onClick={closeSearch}>
        search
      </button>
      </div>
  );
};
export default Searchbar;
