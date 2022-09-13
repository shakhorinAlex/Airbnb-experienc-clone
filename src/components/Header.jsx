import React from 'react'
import reactLogo from '../assets/airbnb.png'
import '../css/Header.css'

export default function Header() {

  return (
    <header className="header">
      <nav className='logo-nav'>
        <a className='logo-link' href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="Airbnb logo" />
        </a>
      </nav>
    </header>
  )
}
