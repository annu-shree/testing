import React from 'react'
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      About us
      <li>
        <Link to="/User/anil/"> anil</Link>
      </li>
      <li>
        <Link to="/User/peter"> peter</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
  );
}

export default About
