import React from 'react'
import { Link } from 'react-router-dom'

function Card({product, index}) {
  return (
    <Link to={`/details/${index}`} className='card h-80  w-60 bg-white rounded-lg'>
        <div className="image h-[70%] w-full overflow-hidden p-4">
            <img className=' hover:scale-[1.03] h-full w-full object-contain' src={product.image} alt="" />
        </div>
        <div className="title flex items-center justify-between px-1 h-[30%] w-full">
            <h1 className='leading-[1] hover:text-[#505446] text-sm w-[70%]'>{product.title}</h1>
            <h1 className='text-md font-bold'>${product.price}</h1>   
        </div>
    </Link>
  )
}

export default Card