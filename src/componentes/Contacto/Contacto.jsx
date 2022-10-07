import React from 'react'
import "./Contacto.css"
import {FaWhatsapp, FaFacebookF, FaInstagram} from "react-icons/fa"
import Iframe from 'react-iframe'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Contacto() {

  useEffect(()=> {
    AOS.init({duration: 1500})
  },[])

  return (
    <div className='contacto' id='contacto'>
            <div className="contacto-title">
        <div className="line"></div>
        <h2 className='contacto_title' data-aos="fade-in">Contacto</h2>
        <div className="line"></div>
      </div>
      <div className="contacto-container">
      <div className="contacto_texto">
        <div className='texto-container'>

          <span data-aos="fade-in">¡Hacemos tu evento a medida!</span>

          <ul className="contacto_ul">
            <li className="contacto_li" data-aos="fade-up">
            📍 Glew, Almirante Brown, Zona Sur, Bs. As.</li>
            <li className="contacto_li"data-aos="fade-down">
              <a className='call' href="tel:+541133928295">📲 WhatsApp: 11 3392-8295</a>
            </li>
          </ul>
          <span data-aos="fade-in">Contactanos para ampliar la información.</span>
        </div>

      </div>
      <div className="contacto_map" data-aos="fade-in">
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
