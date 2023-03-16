import React from 'react'
import { NyhedsImg, NyhedsStyle } from './nyhedsbrev.style'

export const Nyhedsbrev = () => {
  return (
    <NyhedsImg>
        <NyhedsStyle>
            <div className='center'>
                <h2>Tilmed dig vores nyhedsbrev</h2>
                <p className='text'>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
                <div className='sign'>@</div>
                <input type="email" />
                <button>TILMELD</button>
            </div>
        </NyhedsStyle>
    </NyhedsImg>
    
  )
}
