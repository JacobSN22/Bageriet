import React from 'react'
import { Bagværk } from '../Partials/bagværk'
import { News } from '../Partials/news'
import { Nyhedsbrev } from '../Partials/nyhedsbrev'
import { HomeStyle } from '../Style/home.style'

export const Home = () => {
  return (
    <>
    <HomeStyle>
      <h1>Nyheder</h1>
        <News />
        <Nyhedsbrev />
        <h1>Nyeste bagværk</h1>
        <Bagværk />
    </HomeStyle>
    </>


  )
}
