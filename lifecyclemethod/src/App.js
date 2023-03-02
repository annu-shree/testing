
import './App.css';
import Greeting from './Component/Mounting';
import Counter from './Component/Advancemethods';
import { useState } from 'react';

function App() {
 const [show, setShow]= useState(false);
 const [counter, setCounter]= useState(0);

  return (
    <div className="App"> 
   
    <Counter counter={counter}/>
  
    <br />
    <button onClick={() => setCounter(counter+1)}>Increament</button>
   
       {/* {show && <Greeting/>}
    <button onClick={()=>setShow(!show)}>Toggle</button> */}
     </div>
  );
}
export default App;
