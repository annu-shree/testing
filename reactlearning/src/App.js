import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from './Components/Home';
import About from  "./Components/About"
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
//import Page404 from './Components/Page404';
import User from "./Components/User"
import Filterpage from "./Components/Filterpage"
import Company from "./Components/Company"
import Channel from "./Components/Channel";
import Other from "./Components/Other";
import Login from "./Components/Login"
import Protected from "./Components/Protected"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Protected Component={Home}/>}>  </Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
          <Route path="/User/:name" element={<User/>}></Route>
          <Route path="/Filterpage" element={<Filterpage />}></Route>
          <Route path="Company" element={<Company/>}></Route>
          <Route path="Channel" element={<Channel/>}></Route>
          <Route path="Other" element={<Other/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          {/* <Route path="/*" element={<Page404/>}></Route> */}
./        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
