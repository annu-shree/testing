import React from 'react'
import { Link ,useNavigate} from "react-router-dom"  ;
import { useEffect } from "react";

const Protected = (props) => {
    const { Component } = props  
    const navigate = useNavigate();

    useEffect(() => {
        let Login = localStorage.getItem("Login");
        if (!Login) {
            navigate("/Login")
        }
    });


  return (
    <div>
      <Component></Component>
    </div>
  )
}

export default Protected;
