import React from 'react'
import { Link } from 'react-router-dom'
function Category({name}) {
  return (
    <>
        <Link to={`/?category=${name}`} className='text-white hover:text-3xl duration-75 ease-in-out hover:text-[#ffffff77] capitalize text-2xl'>{name}</Link>
    </>
  )
}

export default Category