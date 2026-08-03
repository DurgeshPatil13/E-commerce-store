import React, { useContext } from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Cartcomp from '../components/Cartcomp';
import CheckoutCard from '../components/CheckoutCard';
import { LikeContext } from '../services/Context';
 
const Cart = () => {
  const { cart } = useContext(LikeContext)
 
  return (
    <div className='min-h-screen bg-[#0c0f1a]'>
      <nav className='border-b border-[#2a3145] px-4 sm:px-6 py-3 z-10 sticky top-0 gap-3 w-full flex items-center justify-between bg-[#0c0f1a]/90 backdrop-blur-md'>
        <Link to="/" className='flex items-center gap-2'>
          <IoArrowBackOutline className='text-white text-xl' />
          <div className='flex items-center text-white'>
            <h1 className='text-xl sm:text-2xl font-bold' style={{fontFamily:"'Space Grotesk', sans-serif"}}>
              Snap<span className='text-[#ff4d6d]'>Cart</span>
            </h1>
            <MdOutlineShoppingCartCheckout className='text-2xl sm:text-3xl ml-1' />
          </div>
        </Link>
 
        <div className='text-white flex items-center gap-5 text-2xl'>
          <Link to='/Favourites' className='hover:text-[#ff4d6d] transition-colors'><FaRegHeart /></Link>
          <AiOutlineShoppingCart className='text-[#ff4d6d]' />
        </div>
      </nav>
 
      <div className='max-w-5xl mx-auto p-4 sm:p-6'>
        <div className='mb-6 text-lg sm:text-2xl font-bold text-white' style={{fontFamily:"'Space Grotesk', sans-serif"}}>
          Your Cart <span className='text-[#8b93a7] font-normal text-base sm:text-lg'>({cart.length} items)</span>
        </div>
 
        <div className='grid lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2'>
            {cart.length === 0 ? (
              <p className='text-[#8b93a7] text-center py-16'>Your cart is empty.</p>
            ) : (
              cart.map((pro) => (
                <Cartcomp key={pro.id} pro={pro} />
              ))
            )}
          </div>
 
          <div className='lg:col-span-1'>
            <CheckoutCard />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Cart