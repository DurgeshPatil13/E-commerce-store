import React, { useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Favourites = () => {

  return (
    <div className='h-screen w-full bg-[#070021] '>
      <h2 className='text-white border-b-2 relative border-[#373737] text-3xl w-full text-center p-3'>
     <Link to="/"><IoArrowBackOutline className='absolute top-4' /></Link>   

        All Your Favorite's
      </h2>
      <div className='w-full pt-6'>

      </div>
      </div>
  )
}

export default  Favourites