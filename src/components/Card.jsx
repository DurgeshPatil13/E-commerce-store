
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { LikeContext } from '../services/Context';
import { BsCurrencyDollar } from "react-icons/bs";
 
const Card = ({ pro }) => {
  const { likeset } = useContext(LikeContext);
  const { setcartitem } = useContext(LikeContext);
 
  return (
    <Link to={`/details/${pro.id}`}>
      <div className="bg-[#151a29] border border-[#2a3145] h-90 rounded-2xl p-3 flex flex-col justify-between hover:border-[#ff4d6d] hover:-translate-y-1 transition-all duration-300">
 
        {/* Product Image */}
        <div className="h-45 w-full relative overflow-hidden rounded-xl bg-[#0c0f1a]">
          <button className='absolute z-10 top-2 right-2 bg-black/40 backdrop-blur-sm p-2 rounded-full'>
            <FaRegHeart
              onClick={(e) => {
                e.preventDefault();
                likeset(pro);
              }}
              className='text-lg text-white hover:text-[#ff4d6d] transition-colors'
            />
          </button>
 
          <img
            src={pro.thumbnail}
            alt={pro.title}
            className="w-full h-full object-cover"
          />
        </div>
 
        {/* Product Details */}
        <div className="space-y-1 mt-3">
          <div className="flex items-center gap-2 text-sm text-[#8b93a7]">
            <span className="text-[#ffd23f]">⭐</span>
            <span>{pro.rating?.toFixed(1)}</span>
            <span>({pro.reviews?.length})</span>
          </div>
 
          <h3 className="text-base sm:text-lg line-clamp-1 font-semibold text-white">
            {pro.title}
          </h3>
 
          <p className="md:text-xl text-lg flex items-center font-bold text-[#ff4d6d]" style={{fontFamily:"'JetBrains Mono', monospace"}}>
            <BsCurrencyDollar className='text-sm' />
            {pro.price}
          </p>
        </div>
 
        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault(pro);
            setcartitem(pro)
          }}
          className="w-full flex gap-2 items-center justify-center border-2 border-[#ff4d6d] text-[#ff4d6d] rounded-xl py-2 font-medium hover:bg-[#ff4d6d] hover:text-white transition-colors mt-3"
        >
          Add to Cart <FaCartArrowDown />
        </button>
      </div>
    </Link>
  )
}
 
export default Card