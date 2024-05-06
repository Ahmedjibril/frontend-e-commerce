import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLater from '../Components/NewsLater/NewsLater';
import ShopCategories from './ShopCategories';
import { ShopContext } from '../Context/ShopContext';
import LoginSignup from './LoginSignup';
import Cart from './Cart';
import CartItem from '../Components/CartItem/CartItem';
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers />
      <NewCollections />
      <NewsLater/>
    <LoginSignup/>
    </div>
  )
}

export default Shop;