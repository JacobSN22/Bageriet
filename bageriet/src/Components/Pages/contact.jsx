import React from 'react'
import { Navbar } from '../Partials/nav'
import { ContactStyle } from '../Style/contact.style'

export const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactStyle>
      <h2>Kontakt os</h2>
      <div className='grid'>
        <div className='right'>
          <input type="texttext" placeholder='Dit navn...'/>
          <input type="email" placeholder='Din email...'/>
          <textarea name="" id="" cols="60" rows="10" placeholder='Din besked...'></textarea>
          <button>SEND</button>
        </div>

        <img src={require('../fonts-images/images/Kort.png')} alt="Slide1" />
      </div>
    </ContactStyle>
    
    </>
    
  )
}
