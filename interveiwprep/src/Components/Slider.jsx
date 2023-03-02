import React, { useState } from 'react'

const Slider = () => {
    const img = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg",
        "img6.jpg"]
    const [currentimg, setCurrentimg] = useState(0)
    const [image, setImage] = useState(img);
    const handleClickprev = () => {
    if(currentimg>0)
        setCurrentimg(currentimg - 1)
    }
    const handleClicknext = () => {
        if(currentimg<image.length-1)
        setCurrentimg(currentimg +1)
    }
        return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "130px", cursor: "pointer" }}>
            <div><i
                onClick={handleClickprev}
            ><span class="material-symbols-outlined">
                    arrow_back_ios
                </span></i></div>

            <div style={{
                border: "2px solid black",
                width: "300px",
                height: "300px",
                margin: "50px"
            }}><img src={image[currentimg]} alt="" width="300px" height="300px" /></div>

            <div><i
                onClick={handleClicknext}
            ><span class="material-symbols-outlined">
                    arrow_forward_ios
                </span></i></div>

        </div>
    )
}

export default Slider
