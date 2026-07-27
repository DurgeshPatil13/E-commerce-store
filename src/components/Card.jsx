import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Links } from 'react-router';



const Card = ({pro}) => {

 return(
  <Link to={`/details/${pro.id}`}>
<div className="bg-white h-90  rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition duration-300">
  {/* Product Image */}
<div className="h-45 w-full overflow-hidden rounded-lg bg-gray-100">
  <img
    src={pro.thumbnail}
    alt="Product"
    className="w-full h-full object-cover"
  />
</div>

  {/* Product Details */}
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <span className="text-yellow-500">⭐</span>
      <span>{pro.rating.toFixed(1)}</span>
      <span>{pro.reviews.length}</span>
    </div>

    <h3 className="text-lg line-clamp-1 font-semibold text-gray-900">
  {pro.title}
    </h3>

    <p className="md:text-2xl text-md flex font-bold text-gray-900">
  <MdCurrencyRupee className='text-sm mt-1' />
  {pro.price}
    </p>
  </div>

  {/* Button */}
  <button className="w-full flex gap-2 items-center justify-center border-2 border-black rounded-lg py-2 font-medium hover:bg-black hover:text-white transition">
    Add to Cart <FaCartArrowDown  />

  </button>
</div>
</Link>

 )
}

export default Card