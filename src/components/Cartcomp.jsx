import React from 'react'

import { FaTrashAlt } from "react-icons/fa";
const Cartcomp = ({pro}) => {
  return (
     <div className="w-full mb-3 bg-[#1b1b1b] border p-4 border-zinc-700 rounded-2xl  flex items-center gap-4 hover:border-zinc-500 transition-all">
      {/* Product Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-zinc-800 shrink">
        <img
    src={pro.thumbnail}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h2 className="text-white font-semibold text-base sm:text-lg">
                {pro.title}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
{pro.category}
            </p>
          </div>

          <button className=" mt-1 text-zinc-500 hover:text-red-500 transition">
            <FaTrashAlt size={15} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
          {/* Quantity */}
          <div className="flex items-center bg-[#111] border border-zinc-700 rounded-full overflow-hidden">
            <button className="px-3 py-1 text-red-500 hover:bg-zinc-800 transition">
              −
            </button>

            <span className="px-3 text-white font-medium">
          1
            </span>

            <button className="px-3 py-1 text-white hover:bg-zinc-800 transition">
              +
            </button>
          </div>

          {/* Price */}
          <h3 className="text-white font-bold text-lg">
  $ {pro.price}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Cartcomp