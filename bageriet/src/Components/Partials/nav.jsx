import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavStyle } from './nav.style'

export const Navbar = () => {
  return (
    <NavStyle >
      <ul>
        <li><NavLink to="/">FORSIDE</NavLink></li>
        <li><NavLink to="/kontakt">KONTAKT</NavLink></li>
      </ul>

        <h1>bageriet</h1>
      
      <ul>
        <li><NavLink to="/produkter">PRODUKTER</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>
      </ul>
    </NavStyle>

  )
}
