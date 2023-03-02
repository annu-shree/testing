import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
 import userDB from './loginclass'

const Login = () => {
  const emailInput = useRef()
  const passwordInput = useRef();
  const navigate = useNavigate()

  function Submithandle() {
    const email = emailInput.current.value;
    const pwd = passwordInput.current.value;
    console.log(email, pwd);

    //get the user
    const user = userDB.findByEmail(email);
    if (!user) throw Error("Enter Valid mail");

    // check pwd
    const okPassword = user.checkPassword(pwd);
    console.log(okPassword);

    if (okPassword) {
      // login
      user.login();
      navigate("/Home");
    }

  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#'
    }}>
      <form className="loginform" onSubmit={Submithandle}>
        <h1 className="logtext">Login</h1>
         <img className="loginimg" src="./login-image/loginimg.png" alt=""></img>
        <br></br>
        <br></br>
         <input
          required
          className="username"
          type="email"
          ref={emailInput}
          placeholder="Enter username"
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <input
          className="password"
          type="password"
          ref={passwordInput}
          required
          placeholder="Enter password"
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <button className="loginbutton" type={"submit"}>
          Login
        </button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default Login

