import React from 'react'
import "./Contacto.css"
import {FaWhatsapp, FaFacebookF, FaInstagram} from "react-icons/fa"
import Iframe from 'react-iframe'

export default function Contacto() {

  return (
    <div className='contacto' id='contacto'>
      <div className="contacto-container">
      <div className="contacto_texto">
        <div className='texto-container'>
        <div className="icons">
              <FaFacebookF className='contacto-icon'/>
              <FaInstagram className='contacto-icon'/>
              <FaWhatsapp className='contacto-icon'/>
            </div>

          <ul className="contacto_ul">
            <li className="contacto_li">
                Glew, Almirante Brown,Bs.As.</li>
            <li className="contacto_li">
              11 3392-8295</li>
              <li className="contacto_li copy">
              Copyright 2022 © Quinta Maya - Todos los derechos reservados.</li>

          </ul>

        </div>

      </div>
      <div className="contacto_map">
      <Iframe url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6545.276551231344!2d-58.385534473938286!3d-34.89042857154464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd507296a8155%3A0x14b56fec15885275!2sQuinta%20maya!5e0!3m2!1ses-419!2sar!4v1662343841513!5m2!1ses-419!2sar'
                  width='100%'
                  height='250'
                  allowFullScreen=""
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                  className='iframe'/>
      </div>
      </div>
    </div>
  )
}
