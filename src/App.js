import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ShopCategories from './Pages/ShopCategories';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup'
import Footer from "./Components/Footer/Footer"
import Cart from './Pages/Cart';
import  men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     <Routes>
     <Route path='/' element = {<Shop/>} />
     <Route path='/mens' element = {<ShopCategories banner= {men_banner} category ="men"/>} />
     <Route path='/womens' element = {<ShopCategories banner = {women_banner} category ="women"/>} />
     <Route path='/kids' element = {<ShopCategories banner = {kids_banner} category ="kid"/>} />
     <Route path='/product' element = {<Product />} >
      <Route path='/product/:id' element = {<Product/>} />
     </Route>
     <Route path='/cart' element = {<Cart />} />
     <Route path='/login' element = {<LoginSignup/>} />


     </Routes>
     <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;