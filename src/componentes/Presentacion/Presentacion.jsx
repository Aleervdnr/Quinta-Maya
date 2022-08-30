import React from 'react'
import "./Presentacion.css"
import logo from "../../img/logo2.png"
import img1 from "../../img/img1.jpg"
import img2 from "../../img/img2.jpg"
import img3 from "../../img/img3.jpg"
import {GiKnifeFork, GiGlassCelebration} from "react-icons/gi"
import {MdOutlineBedroomBaby} from "react-icons/md"

export default function Presentacion() {
  return (
    <div className='about ' id='about'>
      <div className="about_texto">
        <h1><img src={logo} alt="Quinta Maya" className='about_logo' /></h1>
        <p>
        Celebrá tu evento con nosotros y armalo de la manera que gustes. Te ofrecemos nuestro equipamiento para que lo combines a tu manera.
        </p>
        <h3>¡Temporada de verano!</h3>
        <p>
          Te proponemos un evento de día con pileta y por la noche disfrutar del salon.
          Aprovechá los diferentes momentos del día en un mismo evento.
        </p>
      </div>

      <div className="about-galeria">
        <img src={img1} alt="" className='about-galeria_img' />
        <div className="box-galeria">
          <GiKnifeFork className='galeria-icon'/> <h4>Servicio de Catering</h4>
        </div>
        <img src={img3} alt="" className='about-galeria_img' />
        <div className="box-galeria">
          <GiGlassCelebration className='galeria-icon'/> <h4>Eventos formales e informales</h4>
        </div>
        <img src={img2} alt="" className='about-galeria_img' />
        <div className="box-galeria">
          <MdOutlineBedroomBaby className='galeria-icon'/> <h4>Eventos infantiles</h4>
        </div>
      </div>
    </div>
  )
}
