import React from 'react'
import { Header } from '../Partials/header'
import { HomeStyle } from '../Style/home.style'

export const Home = () => {
  return (
    <>

    <HomeStyle>
        <img src={require('../fonts-images/images/slides/slide1.jpg')} alt="Slide1" />

        <h3>Nyheder</h3>

        <div className='grid'>
            <div className='article'>
        <img src={require('../fonts-images/images/products/article.jpg')} alt="Slide1" />
        <h4>KREATIVITET DYRKES</h4>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har</p>
            </div>

            <div className='article'>
        <img src={require('../fonts-images/images/products/article2.jpg')} alt="Slide1" />
        <h4>VI ELSKER BRØD</h4>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har</p>
            </div>

            <div className='article'>
        <img src={require('../fonts-images/images/products/article3.jpg')} alt="Slide1" />
        <h4>SANS FOR DETALJEN</h4>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har</p>
            </div>
        </div>

        <div>
            <h2>Tilmed dog vores nyhedsbrev</h2>
            <p>Der er mange tilgængelige udgaver  af Lorem Ipsum, men de fleste udgaver</p>
        </div>
    </HomeStyle>
    </>


  )
}
