import React, { useContext } from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from 'react-router-dom';
import Cartcomp from '../components/Cartcomp';
import CheckoutCard from '../components/CheckoutCard';
import { LikeContext } from '../services/Context';

const Cart = () => {
    const {cart}=useContext(LikeContext)
  return (
    <div className='p-3'>
       <nav className='border-b-2 border-[#3c3c3c] p-3 z-10 sticky top-0 gap-3 w-full flex justify-between bg-[#000000f5]'>
       {/* logo */}
       <div className='flex text-white '>
       <h1 className='lg:text-3xl sm:text-2xl text-xl font-semibold'>
           SnapCart
       </h1>
       <MdOutlineShoppingCartCheckout className='lg:text-4xl sm:text-3xl text-2xl pt-2' />
       </div>
       {/* search */}
      
       {/* cart whislist */}
       <div className='text-white justify-between gap-4  flex lg:text-3xl text-2xl mt-1'>
       <Link to='/Favourites'><FaRegHeart  /></Link> 
       <AiOutlineShoppingCart />
       
       </div>
       </nav> 
       <div className='w-full mt-6 mb-2 pl-4 text-lg sm:text-2xl font-semibold text-[#a5a5a5]'>
        Your Cart ({} items)
       </div> 
       <div className='w-full '>


{
  cart.map((pro)=>(
    <Cartcomp pro={pro}/>
  ))
}
       </div>
       <CheckoutCard/>
    </div>
  )
}

export default Cart