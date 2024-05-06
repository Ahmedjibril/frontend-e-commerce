import React, { useContext } from 'react';
import './CSS/ShopCategories.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Items from '../Components/Items/Items';
const ShopCategories = (props) => {
const {all_product} = useContext (ShopContext);
  return (
    <div className='shop-categories'>
      <img className='shopcategory-banner' src= {props.banner} alt="" />

      <div className="shopcategories-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
          </p>
      <div className="shopcategories-sort">
        sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="shopcategories-products">

    {all_product.map((items, i) =>{
      if(props.category === items.category){

      return <Items 
      key = {i} id = {items.id}
      name ={items.name} image ={items.image} 
      new_price ={items.new_price}
       old_price = {items.old_price} />
      }
      else{
        return null;
      }
      }
    )}
    </div>
    <div className="shopcategory-loadmore">
      Explore More
    </div>
    </div>
  );
}
export default ShopCategories;