import React from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
<nav className=' p-3 z-10 sticky top-0 gap-3 w-full flex justify-between bg-[#000000f5]'>
{/* logo */}
<div className='flex text-white '>
<h1 className='lg:text-3xl sm:text-2xl text-xl font-semibold'>
    SnapCart
</h1>
<MdOutlineShoppingCartCheckout className='lg:text-4xl sm:text-3xl text-2xl pt-2' />
</div>
{/* search */}
<input type="text" placeholder='🔍 Search for products'  className='w-250 pl-3 bg-white rounded-2xl  border-blue-300 border-2 outline-none '/>
{/* cart whislist */}
<div className='text-white justify-between gap-4  flex lg:text-3xl text-2xl mt-1'>
<Link to='/Favourites'><FaRegHeart  /></Link> 
<Link to='/cart' > <AiOutlineShoppingCart /> </Link>

</div>
</nav>
  )
}

export default Navbar