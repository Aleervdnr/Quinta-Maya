import React from 'react'
import "./Servicios.css"
import { GiPartyPopper,GiGlassCelebration,GiDiamondRing,GiTravelDress, GiPeaceDove } from 'react-icons/gi';
import {FaBaby} from "react-icons/fa"
import {RiCake2Line} from "react-icons/ri"
import {AiOutlineCheck} from "react-icons/ai"


export default function Servicios() {
  return (
    <div className='servicios container-section'>
      <div className="servicios_texto container-texto">
        <h2>¡Veni a festejar con nosotros!</h2>
        <div className="container-ul">
          <div className="box">
            <h3>Celebrá con nosotros</h3>
            <ul className='servicios_ul'>
              <li className="servicios_li">
                <RiCake2Line className='ul_icon'/> Cumpleaños
              </li>
              <li className="servicios_li">
                <GiDiamondRing className='ul_icon'/> casamientos
              </li>
              <li className="servicios_li">
              <GiGlassCelebration className='ul_icon'/> aniversarios</li>
              <li className="servicios_li">
                <GiTravelDress className='ul_icon'/> XV años
              </li>
              <li className="servicios_li">
                <FaBaby className='ul_icon'/> bautismos
              </li>
              <li className="servicios_li">
                <GiPeaceDove className='ul_icon'/> comuniones
              </li>
              <li className="servicios_li">
              <GiPartyPopper className='ul_icon'/> despedidas
              </li>
            </ul>
          </div>
          <div className="box">
          <h3>Contamos con</h3>
            <ul className='servicios_ul'>
              <li className="servicios_li">
                <AiOutlineCheck className='ul_icon'/> Salón climatizado
              </li>
              <li className="servicios_li">
                <AiOutlineCheck className='ul_icon'/> amplio parque
              </li>
              <li className="servicios_li">
              <AiOutlineCheck className='ul_icon'/> mobiliario para el evento</li>
              <li className="servicios_li">
                <AiOutlineCheck className='ul_icon'/> discoteca + proyector
              </li>
              <li className="servicios_li">
                <AiOutlineCheck className='ul_icon'/> armado de livings
              </li>
              <li className="servicios_li">
                <AiOutlineCheck className='ul_icon'/> espacio para ceremonias
              </li>
              <li className="servicios_li">
              <AiOutlineCheck className='ul_icon'/> juegos infantiles
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="servicios_img"></div>
    </div>
  )
}
