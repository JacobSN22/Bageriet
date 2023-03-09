import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact } from '../../Pages/contact'
import { Home } from '../../Pages/home'
import { Login } from '../../Pages/login'
import { Products } from '../../Pages/products'
import { Hero } from '../../Partials/Hero'

export const Router = () => {
  return (
    <Routes>
        <Route index element={<Hero />} />

        <Route path='/kontakt' element={<Contact />} />
        <Route path='/produkter' element={<Products />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}
