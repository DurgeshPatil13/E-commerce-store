import React from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
 
const Navbar = ({ search, setSearch }) => {
  return (
    <nav className='px-4 sm:px-6 py-3 z-20 sticky top-0 w-full flex items-center justify-between gap-4 bg-[#0c0f1a]/90 backdrop-blur-md border-b border-[#2a3145]'>
 
      {/* logo */}
      <Link to="/" className='flex items-center gap-2 shrink-0'>
        <div className='bg-[#ff4d6d] p-2 rounded-xl'>
          <MdOutlineShoppingCartCheckout className='text-xl sm:text-2xl text-[#0c0f1a]' />
        </div>
        <h1 className='text-xl sm:text-2xl font-bold tracking-tight text-white' style={{fontFamily:"'Space Grotesk', sans-serif"}}>
          Snap<span className='text-[#ff4d6d]'>Cart</span>
        </h1>
      </Link>
 
      {/* search */}
      <div className='flex-1 max-w-xl relative hidden sm:block'>
        <IoIosSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-[#8b93a7] text-lg' />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder='Search for products'
          className='w-full pl-11 pr-4 py-2.5 bg-[#151a29] text-white placeholder-[#8b93a7] rounded-full border border-[#2a3145] outline-none focus:border-[#ff4d6d] transition-colors'
        />
      </div>
 
      {/* cart wishlist */}
      <div className='text-white flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl shrink-0'>
        <Link to='/Favourites' className='hover:text-[#ff4d6d] transition-colors'><FaRegHeart /></Link>
        <Link to='/cart' className='hover:text-[#ff4d6d] transition-colors'><AiOutlineShoppingCart /></Link>
      </div>
 
      {/* mobile search */}
      <div className='w-full order-3 sm:hidden relative mt-1'>
        <IoIosSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-[#8b93a7] text-lg' />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder='Search for products'
          className='w-full pl-11 pr-4 py-2.5 bg-[#151a29] text-white placeholder-[#8b93a7] rounded-full border border-[#2a3145] outline-none focus:border-[#ff4d6d] transition-colors'
        />
      </div>
    </nav>
  )
}
 
export default Navbar
 