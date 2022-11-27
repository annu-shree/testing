// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import Searchbar from "./components/Searchbar";
// import Dashboard from "./components/Dashboard";
// import { api_current_weather_by_city } from "./components/API";

// function App() {
//   const [data, setData] = React.useState(null);
//   const [openSearch, setOpenSearch] = React.useState(false);
//   const [query, setQuery] = React.useState("london");
//   const [unit, setUnit] = React.useState("metric");

//   const tempunit = unit === "metric" ? "°C" : "°F";

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(api_current_weather_by_city(query, unit));
//       const data = await response.json();
//       console.log(data);
//       let x = {
//         type: data.weather[0].main,
//         temp: data.main.temp,
//         location: data.name,
//         date: data.dt,
//         visibility: data.visibility / 1000, // convert to km
//         humidity: data.main.humidity, // %
//         wind: data.wind.speed, // m/s
//         pressure: data.main.pressure,
//       };
//       setData(x);
//     };
//     fetchData();
//   }, [query, unit]);

//   return (
//     <>
//       <div className="container">
//         {data && (
//           <>
//             {openSearch ? (
//               <Searchbar
//                 setOpen={setOpenSearch}
//                 query={query}
//                 setQuery={setQuery}
//               />
//             ) : (
//               <Sidebar
//                 data={data}
//                 setOpen={setOpenSearch}
//                 tempunit={tempunit}
//               ></Sidebar>
//             )}
//             <Dashboard
//               data={data}
//               unit={unit}
//               setUnit={setUnit}
//               tempunit={tempunit}
//             ></Dashboard>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
