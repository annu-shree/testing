import React from 'react';
import "./App.css"
//import './App.css'; import Checkbox from './Components/checbox';
//import Form from './Components/Form';
//import Logintask from './Components/Logintask';
//import Slider from './Components/Slider';
//import Button from './Components/buttonComponent';
//import { Button_Type  } from './Components/buttonComponent/button';
//import Dropdown from './Components/Dropdown/Dropdown';
//import Conditionalrender from './Components/Conditionalrender/Conditionalrender';
//import CrudApp from './Components/CrudTable/CrudApp';
//import DiTask from './Components/DiTask';
import Pokemon from './Components/Pokemon';
function App() {
  // function btnClick(){
  //  console.log("im clicked")
  // }
  //https://youtube.com/shorts/fEHoX_7kneA?feature=share
  return (
    <div className="App">
      {/* <Checkbox></Checkbox> */}
      {/* <Form></Form> */}
      {/* <Logintask></Logintask> */}
      {/* <Slider></Slider> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Button type={Button_Type.PRIMARY} btnText={"Developer"} onClick={btnClick}></Button>
    <Button type={Button_Type.SECONDARY}  btnText={"Den's"} onClick={btnClick}></Button>
    <Button type={Button_Type.TERTIARY} btnText={"Successful"}  onClick={btnClick()}></Button> */}
     {/* <Conditionalrender></Conditionalrender> */}
     {/* <CrudApp></CrudApp> */}
     {/* <DiTask></DiTask> */}
       <Pokemon></Pokemon>
    </div>
  );
}
  
export default App;
