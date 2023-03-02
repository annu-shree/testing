import React from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import userDB from "./Loginclass"
import Login from "./Login"
const Portfolio = () => {
   const navigate = useNavigate(); 
  const logouthandle = () => {
    localStorage.remove("email","password")
  window.Location.reload()
        navigate('/')
  }


  return (
    <div>
      <h1>Project list</h1>
      <ul>
        <li>
          {" "}
          <NavLink className="Navbar-link" to="/projects/Figmaweather">
            figmaweather
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="Navbar-link" to="/projects/Todoapp">
            todo app
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="Navbar-link" to="/projects/Simpleweather">
            weatherapp
          </NavLink>
        </li>
      </ul>
      <br></br>
      <br></br>
      <button onClick={logouthandle} >logout</button>
    </div>
  );
}

export default Portfolio ;
