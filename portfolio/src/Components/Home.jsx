import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from './Portfolio';
const Home = () => {
  return (
    <div>
      <h1> Homepage</h1>
          <h2> Here are given some of my project list link</h2>
          
      <Link to="/portfolio">Portfolio</Link>
      
    
    </div>
  );
}

export default Home
