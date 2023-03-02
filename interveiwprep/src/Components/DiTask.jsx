import React, { useState } from 'react'

const box = ["box1", "box2", "box3"]

const styleDefault= {
    color: "black",
    backgroundColor: "yellow",
    border: "2px solid black",
    width: "80px",
    height: "80px",
}

const styleSelected= {
    color: "black",
    backgroundColor: "red",
    border: "2px solid black",
    width: "80px",
    height: "80px",
}

const color = { backgroundColor: "blue" }

const DiTask = (e) => {
    const [display, setDisplay] = useState(box)
    const [updateStyle, setUpdateStyle] = useState(styleDefault)
    const [selectedBox, setSelectedBox] = useState("")
    //console.log(updateStyle);
    function clickHandler() {
        setUpdateStyle(styleSelected)
        //console.log(updateStyle)
    }

    function hoverHandler(box) {
        setSelectedBox(box)
        console.log(selectedBox);
    }

    function blurHandler(e) {
        
    }
    return (
        <div>
             <div className="container"
                style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "50px",
                    border: "2px solid black",
                    padding: "40px",
                    width: "500px",
                }}>
                {display.map((box) =>
                    <div
                        key={box}
                        onClick={() => clickHandler(box)}
                        onMouseEnter={() => hoverHandler(box)}
                        onMouseLeave={() => blurHandler(box)}
                        style={selectedBox=== box ? styleSelected : styleDefault}
                        >
                    </div>)
                   }
            </div>
        </div>
    );
}

export default DiTask;
