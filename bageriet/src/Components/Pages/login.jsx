import React from 'react'
import { Navbar } from '../Partials/nav'
import { LoginStyle } from '../Style/login-style'

export const Login = () => {
  return (
    <>
    <LoginStyle> 
    <Navbar />
    
      <h2>Login</h2>
      <div className='center'>
        <div>
          <input type="username" placeholder='Brugernavn'/>
          <input type="password" placeholder='Password'/>
          <div className='right'>
          <button>LOGIN</button>
          </div>
        </div>
        
      </div>
      </LoginStyle>
    </>

  )
}
