import React, { useEffect, useState } from "react";

const Temperature = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=382a74f1c20a9d7bfec883a1c7a5da3c`
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            console.log(resJson)
            setCity(resJson.main);
        }

        fetchApi();
    }, [search]);

    return (
        <>
        <div className="box">
            <div className="inputData">
                <input type="search" 
                    className='inputField' 
                    value={search} 
                    onChange={(event) => { setSearch(event.target.value) }} />
            </div>

            {!city ? (
                <p className='errorMsg'>No Data Found</p>
            ) : (<>
                <div className="info">
                    <h2 className="location">
                        <i className="fa-solid fa-street-view icon-street"></i>{search}
                    </h2>
                    <h1 className="temp">{city.temp}°C</h1>
                    <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
 
                        </div>
                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>
            </>
            )}

        </div>
    </>
)
}
export default Temperature;