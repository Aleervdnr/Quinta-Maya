import React from 'react'
import "./Galeria.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Galeria() {

  useEffect(()=> {
    AOS.init({duration: 1500})
  },[])

  return (
    <div className='galeria'>
      <div className="galeria-title">
        <div className="line"></div>
        <h2 className='galeria_title' data-aos="fade-in">Galeria</h2>
        <div className="line"></div>
      </div>
    <div className="galeria-container">
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      <div className="galeria_item-container" data-aos="fade-in">
        <div className="galeria-item"></div>
      </div>
      {/* <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div>
      <div className="galeria-item"></div> */}
    </div>
    </div>
  )
}
