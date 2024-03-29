import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Component/Home/Home"
import Cart from "./Component/Cart"
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Contact from "./Component/Contact"
import About from "./Component/About"
import Product from "./Component/Product/Product"
import SingleProduct from "./Component/SingleProduct"
import ErrorPage from "./Component/ErrorPage";
import Logout from "./Component/Logout.jsx"
import Wishlist from "./Component/Wishlist";
import ContextWrapper from "./Component/context/ContextWrapper";
//9685298874 Golu yadav

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ContextWrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Product/:id" element={<SingleProduct />}></Route>
            <Route path="Product" element={<Product />}></Route>
            <Route path="Cart" element={<Cart />}></Route>
            <Route path="Logout" element={<Logout />}></Route>
            <Route path="Wishlist" element={<Wishlist/>}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </ContextWrapper>
      </BrowserRouter>
    </div>
  )
}

export default App;
