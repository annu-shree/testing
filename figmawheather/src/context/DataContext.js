import React, {useEffect } from 'react';
import { useMemo } from 'react';
import {  api_current_weather_by_city, API_CURRENT_WEATHER_BY_COORDS, API_FORECAST_WEATHER_BY_COORDS } from "../components/API";

const DataContext = React.createContext({
    data: null,
    setdata: () => { },
    query: 'london',
    setQuery: () => { },
    openSearch: false,
    setOpen: () => { },
    unit: 'metric',
    setUnit: () => { },
    tempunit: 'metric',
    coods: {
        latitude: 0,
        longitude : 0,
    },
    setCoods: () => { },
    fetchByCoods: false,
    setFetchType: () => {},
    Forecast:[],
    setForecast: ()=>{}
})

export const useData = () => React.useContext(DataContext);

const DataContextProvider = (props) => {
    
    const [data, setData] = React.useState({});
    const [openSearch, setOpenSearch] = React.useState(false);
    const [query, setQuery] = React.useState("London");
    const [unit, setUnit] = React.useState("metric");
    const [coods, setCoods] = React.useState({latitude: 0,  longitude : 0});
    const [fetchByCoods , setFetchType] = React.useState(false)
    const[Forecast,setForecast]= React.useState([]);
                                                        
    const tempunit = unit === "metric" ? "°C" : "°F";
    useEffect(() => {
        const fetchData = async () => {
            let response;
            if (fetchByCoods) {
                response = await fetch(API_CURRENT_WEATHER_BY_COORDS(coods.latitude, coods.longitude, unit))
            } else {
                response = await fetch(api_current_weather_by_city(query,unit));
            }
            const data = await response.json();
            console.log(data);
            let x = {
                type: data.weather[0].main,
                temp: data.main.temp,
                location: data.name,
                date: data.dt,
                visibility: data.visibility / 1000, // convert to km
                humidity: data.main.humidity, // %
                wind: data.wind.speed, // m/s
                pressure: data.main.pressure, // hPa
            }
            setData(x);
            console.log(x);
        };
    
        fetchData();
    }, [query, unit, coods, fetchByCoods,Forecast]);
    
    const contextValue = useMemo(() => ({
        data,
        setData,
        query,
        setQuery,
        openSearch,
        setOpen: setOpenSearch,
        unit,
        setUnit,
        tempunit,
        coods, setCoods,
        fetchByCoods, setFetchType,
        Forecast,setForecast
    }), [data, query, openSearch, unit, tempunit, coods, fetchByCoods,Forecast]);
    
    return (
        <DataContext.Provider value={contextValue}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;

 