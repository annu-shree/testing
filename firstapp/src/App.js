import "./App.css";
//import TodoApp from './Component/TodoApp';
 import Counter from "./Component/Counter";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/Homepage" element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter> */}
      <Counter></Counter>
      {/* <TodoApp />  */}
    </div>
  );
}

export default App;
