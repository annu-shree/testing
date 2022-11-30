import React from 'react'
import { Link } from "react-router-dom" ;
 const Contact = () => {
  return (
    <div>
      <h1> Contact Us</h1>
      <h3> here we have some other business </h3>
      <Link to="Company">Company</Link>
      <br></br>
      <Link to="Channel">Channel</Link>
      <br></br>
      <Link to="Other">Other</Link>
    </div>
  );
}

export default Contact;
