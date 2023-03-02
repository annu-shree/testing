import "./App.css";
import React  from 'react'
//import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login"
//const App = () => <Dashboard />  
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/" element={<Login/>}> </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App
  
