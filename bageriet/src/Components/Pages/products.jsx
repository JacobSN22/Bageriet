import React from 'react'
import { Navbar } from '../Partials/nav'
import { ProductStyle } from '../Style/product.style'
import { Categories } from './categories/categories'
import { ProductsList } from './Product/productsList'

export const Products = () => {
  return (
    <> 
    
      <Navbar />
      
      <ProductStyle>
        <h2>Produkter</h2>
        <p>Det er sød musik for smagsløgene at bage hjemmelavede horn, prøv disse lækre morgenhorn.</p>
          <Categories />
          <ProductsList />
        
        
    </ProductStyle>
    </>
  )
}
