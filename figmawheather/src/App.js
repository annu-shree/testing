import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Dashboard from "./components/Dashboard";
import DataContextProvider,{ useData } from "./context/DataContext";


const Weather = () => {
  const { openSearch } = useData();

  return (
    <div className="container">
      {openSearch ? <Searchbar /> : <Sidebar />}
      <Dashboard></Dashboard>
    </div>
  );
}

function App() {
   return (
     <DataContextProvider data={useData()}>
       <Weather/>
     </DataContextProvider>
   );
}

export default App;
