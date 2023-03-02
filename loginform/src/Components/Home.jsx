import React from 'react'
import userDB from './loginclass'
const Home = () => {

    const logoutHandle = (User) => {
      User.Logout()
 }

  return (
    <div>
          <h1> this is Home page</h1>
          <button className='logoutbutton' onClick={logoutHandle}>logout</button>
    </div>
  )
}

export default Home
