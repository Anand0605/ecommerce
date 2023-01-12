import React from "react";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/footer";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import Error from "./components/error/Error";
import Cart from "./components/cart/Cart"
import Wishlist from "./components/wishlist/Wishlist"
import Men from "./components/men/Men";
import Women from "./components/Women/Women";
import Electronics from "./components/Electronics/Electronics";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='*' element={<Error />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women />} />
        <Route path='/Electronics' element={<Electronics />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
