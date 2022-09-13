import React from 'react'
import heroImg from '/images/heroImg.png'
import '../css/hero.css'

export default function Hero() {

  return (
    <div className="hero">
      <img className='hero-img' src={heroImg} alt="" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className='hero-description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
