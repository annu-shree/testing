import React from 'react'
import{Link, useNavigate,useLocation} from "react-router-dom"
const Home = () => {
  const Location = useLocation();
  console.log(Location)
    const Navigate = useNavigate();
    return (
      <div>
        <ul>
          <li>
            <h1>Homepage</h1>
          </li>
          <li>
            <Link to="/About">go to aboutpage</Link>
          </li>
          <li>
            <button onClick={() => Navigate("/About")}>
              Go to Aboutpage{" "}
            </button>
          </li>
          <li>
            {" "}
            <button onClick={() => Navigate("/Filterpage")}>
              {" "}
              Go to Filterpage
            </button>
          </li>
        </ul>
      </div>
    ); 
}

export default Home;
