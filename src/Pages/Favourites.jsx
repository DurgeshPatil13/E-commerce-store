import React, { useContext } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LikeContext } from '../services/Context';
import Card from '../components/Card';
 
const Favourites = () => {
  const { like } = useContext(LikeContext);
 
  return (
    <div className='min-h-screen w-full bg-[#0c0f1a]'>
      <div className='relative border-b border-[#343e57] p-4 sm:p-5 flex items-center justify-center'>
        <Link to="/" className='absolute left-4 sm:left-6'>
          <IoArrowBackOutline className='text-white text-2xl hover:text-[#ff4d6d] transition-colors' />
        </Link>
        <h2 className='text-white text-2xl sm:text-3xl font-bold' style={{fontFamily:"'Space Grotesk', sans-serif"}}>
          Your Favorites
        </h2>
      </div>
 
      {(!like || like.length === 0) ? (
        <p className='text-[#959eb5] text-center py-20'>No favorites yet — tap the heart on a product to save it here.</p>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 sm:gap-5 lg:gap-6 p-4 sm:p-6">
          {like.map((pro) => (
            <Card key={pro.id} pro={pro} />
          ))}
        </div>
      )}
    </div>
  )
}
 
export default Favourites