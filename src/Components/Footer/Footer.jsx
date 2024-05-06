import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icons from '../Assets/instagram_icon.png' 
import Pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOOPER</p>
       </div>
       <ul className="footer-links">
        <li>Product</li>
        <li>Company</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer-social-icon">

        <div className="icons-container">
            <img src= {instagram_icons} alt="" />
        </div>
        <div className="icons-container">
            <img src= {Pinterest_icon} alt="" />
        </div>
        <div className="icons-container">
            <img src= {whatsapp_icon} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Footer;