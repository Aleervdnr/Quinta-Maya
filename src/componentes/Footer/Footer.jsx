import React from 'react'
import "./Footer.css"
import {FaWhatsapp, FaFacebookF, FaInstagram} from "react-icons/fa"


function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-container">
      <div className="icons">
          <a href="https://www.facebook.com/QuintaMayaEventos/" target="_blank" rel="noopener noreferrer"><FaFacebookF className='footer-icon'/></a>
          
          <a href="https://www.instagram.com/quinta_maya/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='footer-icon'/>
            
          </a>
          <a href="https://wa.me/541133928295?text=Hola%20Quinta%20Maya,%20estoy%20interesado%20en%20sus%20servicios" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className='footer-icon'/>
            
          </a>
      </div>

      <span className='copy'>Copyright 2022 © Quinta Maya - Todos los derechos reservados.</span>
      
      </div>
    </footer>
  )
}

export default Footer