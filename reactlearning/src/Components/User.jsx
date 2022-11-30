import React from "react"
import { useParams } from "react-router-dom"

const User = () => {
    const params = useParams();
    const {name} = params
  return (
    <div>
          <h1>this is {name}'s page</h1>
    </div>
  )
}

export default User
  