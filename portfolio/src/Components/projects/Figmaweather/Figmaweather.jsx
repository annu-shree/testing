import React from 'react'
import DataContextProvider, { useData } from './components/context/DataContext';
import Dashboard from './components/Dashboard';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import  "./Figmaweather.css"


const Weather = () => {
  const { openSearch } = useData();

  return (
    <div className="container">
      {openSearch ? <Searchbar /> : <Sidebar />}
      <Dashboard />
    </div>
  );
};

function Figmaweather() {
  return (
    <DataContextProvider>
      <Weather />
    </DataContextProvider>
  );
}
export default Figmaweather;
