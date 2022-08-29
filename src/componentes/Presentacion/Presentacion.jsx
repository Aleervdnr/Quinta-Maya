import React from 'react'
import "./Presentacion.css"
import logo from "../../img/logo2.png"
import { GiPartyPopper,GiGlassCelebration,GiDiamondRing,GiTravelDress, GiPeaceDove } from 'react-icons/gi';
import {FaBaby} from "react-icons/fa"
import {RiCake2Line} from "react-icons/ri"

export default function Presentacion() {
  return (
    <div className='about container-section' id='about'>
      <div className="about_texto container-texto">
        <h1><img src={logo} alt="Quinta Maya" className='about_logo' /></h1>
        <p>
        Celebrá tu evento con nosotros y armalo de la manera que gustes. Te ofrecemos nuestro equipamiento para que lo combines a tu manera.
        </p>
        <h3>¡Temporada de verano!</h3>
        <p>
          Te proponemos un evento de día con pileta y por la noche disfrutar del salon.
          Aprovechá los diferentes momentos del día en un mismo evento.
        </p>

        {/* <h3>Celebrá con nosotros</h3>
        <ul className='about_ul'>
          <li className="about_li">
            <RiCake2Line className='ul_icon'/> Cumpleaños
          </li>
          <li className="about_li">
            <GiDiamondRing className='ul_icon'/> casamientos
          </li>
          <li className="about_li">
          <GiGlassCelebration className='ul_icon'/> aniversarios</li>
          <li className="about_li">
            <GiTravelDress className='ul_icon'/> XV años
          </li>
          <li className="about_li">
            <FaBaby className='ul_icon'/> bautismos
          </li>
          <li className="about_li">
            <GiPeaceDove className='ul_icon'/> comuniones
          </li>
          <li className="about_li">
          <GiPartyPopper className='ul_icon'/> despedidas
          </li>
        </ul> */}
      </div>
      <div className="about_img"></div>
    </div>
  )
}
