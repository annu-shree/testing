import React from "react";


const Wheathercard = () => {

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="searchpannel">
            <button className="searchbutton">Search for location</button>
            <div className="sideicon">
              <i>
                <span class="material-symbols-outlined">my_location</span>
              </i>
            </div>
          </div>

          <div className="wthrimg"><img src="./wheather-image/Shower.png" width="100px" height="110px"></img> </div>
          <div className="tempinfo">15°c</div>

          <div className="tempstatus"><h3>shower</h3></div>
          <div className="date"> <h5>Today . Fri,5jun</h5></div>
          <div className="location"><i><span class="material-symbols-outlined">
            location_on
          </span><h6>Helinski</h6></i></div>

        </div>




        <div className="dashboard">
          <div className="tempbutton">
            <button className="celcius" > °C</button>
            <button className="fehrenite" > °F</button>
          </div>

          <div className="cards">
            <div className="c1">
              <div className="daydate"> Tommorow</div>
              <div className="wthrimg"><img src="./wheather-image/Sleet.png" width="50px" height="50px"></img> </div>
              <div className="temptr">
                <div className="max_temp" >16°C</div>
                <div className="min_temp">11°C</div></div>
            </div>


            <div className="c2">
              <div className="daydate">Sun,7Jun </div>
              <div className="wthrimg"><img src="./wheather-image/Sleet.png" width="50px" height="50px"></img> </div>
              <div className="temptr">
                <div className="max_temp">16°C</div>
                <div className="min_temp">11°C</div></div>
            </div>

            <div className="c3">
              <div className="daydate"> Mon,8Jun</div>
              <div className="wthrimg"> <img src="./wheather-image/Thunderstorm.png" width="50px" height="50px"></img></div>
              <div className="temptr">
                <div className="max_temp">16°C</div>
                <div className="min_temp">11°C</div></div>
            </div>


            <div className="c4">
              <div className="daydate"> Tue,9Jun</div>
              <div className="wthrimg"><img src="./wheather-image/Clouds.png" width="50px" height="50px"></img> </div>
              <div className="temptr">
                <div className="max_temp">16°C</div>
                <div className="min_temp">11°C</div></div>
            </div>


            <div className="c5">
              <div className="daydate">Wed,10Jun </div>
              <div className="wthrimg"><img src="./wheather-image/HeavyRain.png" width="50px" height="50px"></img> </div>
              <div className="temptr">
                <div className="max_temp">16°C</div>
                <div className="min_temp">11°C</div></div>
            </div>

          </div>

          <div className="highlight_info">

            <div className="highlight"><h3> Todays Highlights</h3></div>


            <div className="wh">
              <div className="windstatus">
                <div className="w1">Wind status </div>
                <div className="w2"><h1>7</h1><div className="mph">mph</div> </div>
                <div className="w3"> wsw</div>
              </div>

              <div className="humidity">
                <div className="h1">Humidity</div>
                <div className="h2"> 84% </div>
              </div>
            </div>


            <div className="va">
              <div className="visibility">
                <div className="v1">Visibility </div>
                <div className="v2"><h1>6,4</h1><div className="miles">miles</div></div>
              </div>

              <div className="Airpressure">
                <div className="a1">Airpressure </div>
                <div className="a2"><h1>998</h1><div className="mb">mb</div> </div>
              </div>
            </div>
          </div>
          <div className="footer"><h6>created by username-dev chalanges.io</h6></div>


        </div>


      </div>

      {/* <div className="container"><h1> anushree</h1> </div> */}
    </>
  )

}


export default Wheathercard;