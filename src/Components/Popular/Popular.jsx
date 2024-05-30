import React, {useEffect, useState } from 'react'
import './Popular.css'
import Items from "../Items/Items"
const Popular = () => {

  const [popularProducts, setPopularProducts]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:4001/popularinwomens')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));  
  },[]);
  return (
    <div className='popular'>
        <h1> POPULAR IN WOMEN</h1>
        <hr/>

        <div className="popular-items">
            {popularProducts.map ((items, i)=>{
                return < Items key = {i} id = {items.id}
                 name ={items.name} image ={items.image} 
                 new_price ={items.new_price}
                  old_price = {items.old_price} />
            })
            }
        </div>

    </div>
  )
}

export default Popular;