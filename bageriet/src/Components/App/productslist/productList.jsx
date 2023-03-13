import { createContext, useEffect, useState } from "react"
import axios from "axios"

const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [ productList, SetProductList ] = useState([])

    useEffect(() => {
        if(sessionStorage.getItem('productlist')) {
            SetProductList(sessionStorage.getItem('productlist'))
        } else {
            const getData = async () => {
                const result = await axios.get('https://api.mediehuset.net/bakeonline/products')
                console.log(result);
            }
            getData()
        }
    }, [children]);


  return (
    <ProductContext.Provider value={{productList, SetProductList}}>
        {children}
    </ProductContext.Provider>
  );    
}


export { ProductProvider }