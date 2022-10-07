import React from 'react'
import "./Hero.css"
import logo from "../../img/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Hero() {

  useEffect(()=> {
    AOS.init({duration: 2000})
  },[])

  return (
    <div className='hero'>
      <div className="layer"></div>
      <div className="container container_hero">
        <img src={logo} alt="Quinta maya" className='hero_logo' data-aos="fade-in"/>
        <p className='hero_title' data-aos="fade-in">
          ¡Celebrá tu <span className='bold'>evento</span> con nosotros!
        </p>

        <div className="button-container" data-aos="fade-up">
        <a className='btn btn1' href='#contacto'>Contacto</a>
        <a href='#about' className='btn btn2'>Ver más</a>
        </div>

      </div>
    </div>
  )
}
