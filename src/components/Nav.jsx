import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Category from './Category'
import { ProductContext } from '../utils/Context'
import Create from './Create';

function Nav() {

  var [product] = useContext(ProductContext);
  var uniqueproduct = product && product.reduce((acc , cv) => [...acc,  cv.category],[]);
  uniqueproduct = [...new Set(uniqueproduct)];
  return (
    <div className='h-screen w-[22vw] bg-[#151812] px-5 py-5'>
        <div className="logo flex items-center justify-between">
            <div className="logopart">
            <h1 className='text-[#fff] leading-[1] text-4xl font-semibold'>eShop</h1>
            <h1 className='text-[#fff] text-md'>by Swaraj</h1>
            </div>
            <div className="newpart px-4 py-2 border-2 border-white">
                <Link to='/create' className='text-white hover:text-md duration-75 ease-in-out hover:text-[#ffffff77] text-sm '>Add New Product</Link>
            </div>
        </div>
        <hr className='bg-[#ffffff77] my-4' />
        <div className="navelements mt-[2vw] flex flex-col gap-[2vw]">
            <Link to="/" className='text-white hover:text-3xl duration-75 ease-in-out hover:text-[#ffffff77] text-2xl '>Home</Link>
            <div className="category flex flex-col gap-[2vw]">
                {uniqueproduct.map((elem,index)=>{
                    return (
                        <Category key={index} index = {index} name={elem}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Nav