import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
      <nav>
        <Link className='navLink' to={"/"}>Inicio</Link>
      </nav>

      <NavLink to={"/"}>
        <img src="../public/logo.webp" alt="World of Warships" className='logo' />
      </NavLink>

    </header>
  )
}

export default NavBar
