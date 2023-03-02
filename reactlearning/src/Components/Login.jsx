import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {

  const Login = () => {
    localStorage.setItem("Login", true)  
    navigate("/");
  }
 const navigate = useNavigate();
  useEffect(() => {
    let Login = localStorage.getItem("Login");
    if (Login) {
      navigate("/");
    }
  })
  
  return (
    <div>
      <h1>login page</h1>
      <input type="text"></input>
      <br></br>
      <input type="text"></input>
      <br></br>
      <button onClick={Login}>Login</button>
      
    </div>
  );
}

export default Login;
