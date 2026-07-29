import React, { useContext, useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { Link} from 'react-router-dom';
import { LikeContext } from '../services/Context';
import Card from '../components/Card';
const Favourites = () => {
  
const {like}=useContext(LikeContext);
  return (
    <div className='h-screen w-full bg-[#070021] '>
      <h2 className='text-white border-b-2 relative border-[#373737] text-3xl w-full text-center p-3'>
     <Link to="/"><IoArrowBackOutline className='absolute top-4' /></Link>   

        All Your Favorite's
      </h2>
  <div className="grid lg:grid-cols-4 lg:grid-row-1 sm:grid-cols-3 sm:grid-row-2 grid-cols-2 grid-row-2 lg:gap-10 gap-3 p-3 lg:p-6">
{  
like?.map((pro)=>(
<Card  pro={pro}/>
))
}
      </div>
      </div>
  )
}

export default  Favourites