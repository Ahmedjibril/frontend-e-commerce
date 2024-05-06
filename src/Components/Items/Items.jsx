import React from 'react'
import './Items.css'
import Product from '../../Pages/Product';
import { Link } from 'react-router-dom';
const Items = (items) => {
  return (
    <div className='items'>
    <Link to={`/product/${items.id}`}><img onClick={window.scrollTo(0,0)} src= {items.image} alt="" /></Link>    
        <p>{items.name}</p>
        <div className="items-prices">
            <div className="items-price-new">
               $ {items.new_price}
            </div>
            <div className="items-price-old">
               <del> ${items.old_price}</del>
            </div>
        </div>
    </div>
  )
}

export default Items;