import React from 'react'
import "./Presentacion.css"
import logo from "../../img/logo2.png"
import {GiKnifeFork, GiGlassCelebration} from "react-icons/gi"
import {MdOutlineBedroomBaby} from "react-icons/md"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import img1 from "../../img/10.webp"
import img2 from "../../img/12.webp"
import img3 from "../../img/11.webp"

export default function Presentacion() {

  useEffect(()=> {
    AOS.init({duration: 2000})
  },[])

  return (
    <div className='about ' id='about'>
      <div className="about_texto">
        <h1 data-aos="fade-in" ><img src={logo} alt="Quinta Maya" className='about_logo' /></h1>
        <p data-aos="fade-in">
        Celebrá tu evento con nosotros y armalo de la manera que gustes. Te ofrecemos nuestro equipamiento para que lo combines a tu manera.
        </p>
        <h3 data-aos="fade-in">¡Temporada de verano!</h3>
        <p data-aos="fade-in">
          Te proponemos un evento de día con pileta y por la noche disfrutar del salon.
          Aprovechá los diferentes momentos del día en un mismo evento.
        </p>
      </div>

      <div className="about-galeria">
        <img src={img1} alt="" className='about-galeria_img' data-aos="fade-in" />
        <div className="box-galeria" data-aos="fade-in">
          <GiKnifeFork className='galeria-icon'/> <h4>Servicio de Catering</h4>
        </div>
        <img src={img2} alt="" className='about-galeria_img' data-aos="fade-in" />
        <div className="box-galeria" data-aos="fade-in">
          <GiGlassCelebration className='galeria-icon'/> <h4>Eventos formales e informales</h4>
        </div>
        <img src={img3} alt="" className='about-galeria_img' data-aos="fade-in"/>
        <div className="box-galeria" data-aos="fade-in">
          <MdOutlineBedroomBaby className='galeria-icon'/> <h4>Eventos infantiles</h4>
        </div>
      </div>
    </div>
  )
}
