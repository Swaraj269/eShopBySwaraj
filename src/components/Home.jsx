import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { ProductContext } from '../utils/Context'
import { useLocation } from 'react-router-dom';
import axios from '../utils/Axios';



function Home() {
  const [product] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);
  const [cat, setCat] = useState([]);
  const getProductCategory = async () =>{
    try {
        const {data} = await axios.get(`/products/category/${category}`);
        setCat(data);
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    if(cat.length === 0 || category === "undefined") {
        setCat(product);
    }
    if(category != "undefined") {
      // getProductCategory();
      setCat(product.filter(e => e.category === category));
    }
  }, [category, product]);


  return (
    <div className='w-[78vw] h-screen bg-[#e9e9e9]'>
        <div className="cards h-full w-full flex flex-wrap gap-6 justify-start items-start px-16 py-14 overflow-y-auto overflow-x-hidden">
            {cat && cat.map((elem, index) =>{
                return <Card key={elem.id} index = {index} product={elem} />
            })}
        </div>
    </div>
  )
}

export default Home