import React, { useState } from 'react'
import D from './D'
import A from "./A"
import B from "./B"
import C from "./C"

const button = [
  { name: "buttonA" },
  { name: "buttonB" },
  { name: "buttonC" },
  { name: "buttonD" },
]

const Conditionalrender = () => {
  const [isDisplay, setISDisplay] = useState(button)
  const [selected, setSelected] = useState("")

  const clickHandler = (item, i) => {
    setSelected(item) 
    console.log('isDisplay', isDisplay)
  }
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div
          className='sidebar'
          style={{
            border: "2px solid black",
            width: "200px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px"
          }}>
          {isDisplay.map((item, i) =>
            <button
              key={i}
              onClick={() => { clickHandler(item.name) }}>
              {item.name}
            </button>)
          }

        </div>
        <div
          className='dashboard'
          style={{
            border: "2px solid black",
            width: "400px",
            height: "400px"
          }}>
          {(() => {
            switch (selected) {
              case "buttonA":
                return <A></A>;
              case "buttonB":
                return <B></B>;
              case "buttonC":
                return <C></C>;
              default:
                return <D></D>
            }
          })()}

        </div>
      </div>
    </div>
  )
}

export default Conditionalrender;
