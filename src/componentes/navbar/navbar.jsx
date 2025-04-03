import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export function Navbar() {
  const [active, setActive] = useState(false)
  const toggleNavbar = () => {
    setActive(!active)
  }
  return (
    <header className="header" id='header'>
      <span className="logo"></span>

      <button className='toggle-menu' onClick={toggleNavbar}><FontAwesomeIcon icon={faBars} /></button>
      <nav className={`nav-links ${active ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}