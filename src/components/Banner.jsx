import React from 'react'
import banner from '../assets/banner1.png'
const Banner = () => {
  return (
    <div className=' w-full  '>
        <img src={banner} className='object-cover w-full h-130' alt=""  />
    </div>
  )
}

export default Banner