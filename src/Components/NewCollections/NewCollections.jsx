import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Items from '../Items/Items'

const NewCollections = () => {

  const [new_collection,setNew_Collection] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4001/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_Collection(data));
  
    
  },[]);
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
 
    {new_collection.map((items, i) =>{
        return< Items key ={i} name ={items.name} image ={items.image}
        new_price ={items.new_price}
        old_price = {items.old_price} />

    })}
        </div>
    </div>
  )
}

export default NewCollections;