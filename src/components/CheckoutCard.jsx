
import React, { useContext } from "react";
import { LikeContext } from "../services/Context";
 
const CheckoutCard = () => {
  const { cart } = useContext(LikeContext)
 
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0)
 
  return (
    <div className="w-full rounded-2xl bg-[#151a29] border border-[#2a3145] p-6 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff4d6d]/20 rounded-full blur-2xl" />
 
      <h3 className="text-sm uppercase tracking-widest text-[#8b93a7] font-semibold mb-1">Order Summary</h3>
 
      {/* Taxes */}
      <div className="flex justify-between items-center mt-3 text-xs text-[#8b93a7]">
        <span>Taxes</span>
        <span>Calculated at checkout</span>
      </div>
 
      <hr className="my-4 border-[#2a3145]" />
 
      {/* Total */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold" style={{fontFamily:"'Space Grotesk', sans-serif"}}>Total</h2>
        <h2 className="text-2xl font-bold text-[#ff4d6d]" style={{fontFamily:"'JetBrains Mono', monospace"}}>
          ${total.toFixed(0)}
        </h2>
      </div>
 
      {/* Button */}
      <button className="w-full mt-6 bg-[#ff4d6d] text-white font-semibold py-3 rounded-xl hover:bg-[#ff3358] transition-all duration-300 active:scale-95">
        Proceed to Checkout
      </button>
    </div>
  );
};
 
export default CheckoutCard;
 