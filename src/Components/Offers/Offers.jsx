import React from 'react'
import exculisve_image from '../Assets/exclusive_image.png'
import './Offers.css'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exculisve_image} alt="" />

        </div>
    </div>
  )
}

export default Offers;