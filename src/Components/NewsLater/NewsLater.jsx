import React from 'react'
import './NewsLater.css'
const NewsLater = () => {
  return (
    <div className='news-later'>

        <h1>Get Exclusive Offeers On Your Email</h1>   
        <p>Subscribe To Our Newslatter And Get Updated </p> 
        <div>
          <input type='email' placeholder='Enter Your Email id'/>
        <button>Subscribe </button>
        </div>
    </div>
  )
}

export default NewsLater;