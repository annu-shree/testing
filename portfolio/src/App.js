
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Portfolio from './Components/Portfolio';
import Figmaweather from "./Components/projects/Figmaweather/Figmaweather"
import Login from "./Components/Login";
import Home from "./Components/Home"
import { Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Portfolio></Portfolio> */}
        <Routes>
          <Route path="/projects/figmaweather"element={<Figmaweather />}></Route>
          <Route path="/Home" element={<Home />}></Route>
           <Route path="/" element={<Login />}></Route> 
          {/* <Route path="/*" element={<Navigate to="/"></Navigate>}></Route> */}
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
