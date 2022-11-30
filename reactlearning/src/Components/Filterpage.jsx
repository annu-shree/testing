import React from 'react'
import { useSearchParams } from "react-router-dom";


const Filterpage = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    const city = searchParams.get("city");


  return (
    <div>
      <h1> this is Filterpage</h1>
      <h2> Age is :{age} </h2>
      <h2> city is :{city} </h2>
      <input
        type="text"
        onChange={(e) => setSearchParams({ city: e.target.value })}
        placeholder="your city"
      ></input><br></br>

      <input
        type="text"
        onChange={(e) => setSearchParams({ age: e.target.value })}
        placeholder="your age"
      ></input><br></br>
       
          
      <button onClick={() => setSearchParams({ city: city })}>
        Set city in query params
      </button><br></br>
          
      <button onClick={() => setSearchParams({ age: age })}>
        Set Age  in query params
      </button>
    </div>
  );
}

export default Filterpage;
