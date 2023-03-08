import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home } from '../Pages/home'
import { HeroStyle } from './hero.style'
import { HeroImg } from './nav.style'

export const Hero = () => {
  return (
    <>
    <HeroImg>
    <HeroStyle >
      <ul>
        <li><NavLink to="/">FORSIDE</NavLink></li>
        <li><NavLink to="kontakt">KONTAKT</NavLink></li>
      </ul>

        <h1>bageriet</h1>
      
      <ul>
        <li><NavLink to="produkter">PRODUKTER</NavLink></li>
        <li><NavLink to="login">LOGIN</NavLink></li>
      </ul>
    </HeroStyle>
    </HeroImg>

    <Home />
    </>

  )
}
