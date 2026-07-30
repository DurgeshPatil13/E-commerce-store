import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
const Cartcomp = () => {
  return (
     <div className="w-full mb-2 bg-[#1b1b1b] border border-zinc-700 rounded-2xl p-4 flex items-center gap-4 hover:border-zinc-500 transition-all">
      {/* Product Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-zinc-800 shrink">
        <img
    src='https://m.media-amazon.com/images/I/61k86rQjLtL._AC_AA360_.jpg'
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h2 className="text-white font-semibold text-base sm:text-lg">
           Logitech M235 Wireless Mouse, 1000 DPI Optical Tracking
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
           Mouse
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
  $10
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Cartcomp