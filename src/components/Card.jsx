import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";

const Card = ({pro}) => {
  return (
    
 
<div className="bg-white h-90  rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition duration-300">
  {/* Product Image */}
<div className="h-45 w-full overflow-hidden rounded-lg bg-gray-100">
  <img
    src={pro.image}
    alt="Product"
    className="w-full h-full object-cover"
  />
</div>

  {/* Product Details */}
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <span className="text-yellow-500">⭐</span>
      <span>{pro.rating}</span>
      <span>({pro.reviews})</span>
    </div>

    <h3 className="text-lg font-semibold text-gray-900">
  {pro.title}
    </h3>

    <p className="text-2xl flex font-bold text-gray-900">
  <MdCurrencyRupee className='text-sm mt-1' />
  {pro.price}
    </p>
  </div>

  {/* Button */}
  <button className="w-full border-2 border-black rounded-lg py-2 font-medium hover:bg-black hover:text-white transition">
    Add to Cart
  </button>
</div>


  )
}

export default Card