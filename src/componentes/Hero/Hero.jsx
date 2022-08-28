import React from 'react'
import "./Hero.css"
import logo from "../../img/logo.png"

export default function Hero() {
  return (
    <div className='hero'>
      <div className="layer"></div>
      <div className="container container_hero">
        <img src={logo} alt="Quinta maya" className='hero_logo' />
        <p className='hero_title'>
          ¡Celebrá tu <span className='bold'>evento</span> con nosotros!
        </p>
        <button>Contacto</button>

      </div>
    </div>
  )
}
