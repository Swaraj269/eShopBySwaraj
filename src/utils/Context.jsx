import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'
export const ProductContext = createContext();
function Context(props) {
  var [product, setProduct] = useState( JSON.parse(localStorage.getItem("product")) || []);
  const getProduct = async () => {
    try{
        const {data} = await axios("/products");
        setProduct(data);
    } catch(err){
        console.error(err);
    }
  }
  useEffect(() => {
    getProduct();
  }, [])
  return (
    <ProductContext.Provider value={[product, setProduct]} >{props.children}</ProductContext.Provider >
  )
}

export default Context