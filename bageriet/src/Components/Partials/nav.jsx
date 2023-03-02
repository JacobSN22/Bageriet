import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavStyle } from './nav.style'

export const Nav = props => {
  return (
    <NavStyle >
        <div className='main'>
          {/* <img src={require('../fonts-images/images/slides/slide1.jpg')} alt="Slide1" /> */}
          <div className='ontop'>
                        <li><NavLink to="/">FORSIDE</NavLink></li>
            <li><NavLink to="kontakt">KONTAKT</NavLink></li>

            <h1>bageriet</h1>
        
            <li><NavLink to="produkter">PRODUKTER</NavLink></li>
            <li><NavLink to="login">LOGIN</NavLink></li>
          </div>
        </div>
        



    </NavStyle>

  )
}
