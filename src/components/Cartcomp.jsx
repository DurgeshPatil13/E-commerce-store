

import React, { useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { LikeContext } from '../services/Context';
 
const Cartcomp = ({ pro }) => {
  const { deletecartitem, increasequantity, decreasequantity } = useContext(LikeContext)
  return (
    <div className="w-full mb-3 bg-[#151a29] border border-[#2a3145] p-4 rounded-2xl flex items-center gap-4 hover:border-[#3a4258] transition-all">
 
      {/* Product Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#0c0f1a] shrink-0">
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
            <p className="text-[#8b93a7] text-xs sm:text-sm">
              {pro.category}
            </p>
          </div>
 
          <button className="mt-1 text-[#8b93a7] hover:text-[#ff4d6d] transition-colors">
            <FaTrashAlt onClick={() => {
              deletecartitem(pro);
            }} size={15} />
          </button>
        </div>
 
        <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
          {/* Quantity */}
          <div className="flex items-center bg-[#0c0f1a] border border-[#2a3145] rounded-full overflow-hidden">
            <button onClick={() => decreasequantity(pro)} className="px-3 py-1 text-[#ff4d6d] hover:bg-[#1c2333] transition-colors">
              −
            </button>
 
            <span className="px-3 text-white font-medium" style={{fontFamily:"'JetBrains Mono', monospace"}}>
              {pro.quantity}
            </span>
 
            <button onClick={() => increasequantity(pro)} className="px-3 py-1 text-white hover:bg-[#1c2333] transition-colors">
              +
            </button>
          </div>
 
          {/* Price */}
          <h3 className="text-white font-bold text-lg" style={{fontFamily:"'JetBrains Mono', monospace"}}>
            ${(pro.price * pro.quantity).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  )
}
 
export default Cartcomp