import React from "react";

const CheckoutCard = () => {


  return (
    <div className="w-full  rounded-2xl bg-linear-to-b from-pink-500 to-pink-700 p-5 text-white shadow-xl">

      {/* Subtotal */}
      <div className="flex justify-between items-center text-sm font-medium">
        <span>Subtotal</span>
        <span>$1000</span>
      </div>

      {/* Taxes */}
      <div className="flex justify-between items-center mt-1 text-xs text-pink-100">
        <span>Taxes</span>
        <span>Calculated at checkout</span>
      </div>

      <hr className="my-4 border-pink-300/40" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Total</h2>
        <h2 className="text-2xl font-bold">
          $1000
        </h2>
      </div>

      {/* Button */}
      <button className="w-full mt-6 bg-white text-pink-600 font-semibold py-3 rounded-xl hover:bg-zinc-100 transition-all duration-300 active:scale-95">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckoutCard;