import React from 'react'
import { useState } from 'react'
const Checkbox = () => {
  const [checked, setChecked] = useState(false)
  const clickHandler = (e)=>{
      setChecked(e.target.checked) 
      console.log("checked",checked)
     }
  return (
    <div style={{
      display: "flex",
      padding: "130px",
      justifyContent: "center"
    }}>
      <div className='main' style={{
        width: "400px",
        height: "400px",
        border: "2px solid black",
        backgroundColor: "pink",
        color: "black",
        paddingTop: "0px"
      }}>
        <input type="checkbox"  defaultChecked={false} id="checkbox" onClick={(e)=>{clickHandler(e)}}></input>
        {checked?<h1 id="text" style={{ paddingTop: "140px"}}>Anushree</h1>: null } 
      </div>
    </div>
  )
}

export default Checkbox
