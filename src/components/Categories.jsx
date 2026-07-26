import React from 'react'

const Categories = ({state}) => {
  return (
    <div className='text-white mt-2'>
        <h2 className='sm:text-3xl text-2xl ml-4  '>
            Shop By Categories -
        </h2>
        {/* tabs */}
        <div className='grid mx-4 mt-3 grid-flow-col grid-rows-2 md:grid-rows-1 gap-4 md:gap-8'>
            <div className='bg-blue-300 rounded-3xl w-full p-2 sm:text-2xl text-xl text-center'>
            <button onClick={()=>{
                 state("smartphones")
            }}>   📱 Electronics</button>
            </div >
               <div className='bg-blue-300 rounded-3xl w-full p-2 sm:text-2xl text-xl text-center'>
        <button onClick={()=>{
                 state("womens-dresses")
            }}>   👗 Fashions</button>
            </div>
               <div className='bg-blue-300 rounded-3xl w-full p-2 sm:text-2xl text-xl text-center'>
                <button onClick={()=>{
                 state("beauty")
            }}>   💄 Beauty</button>
            </div>
               <div className='bg-blue-300 rounded-3xl w-full p-2 sm:text-2xl text-xl text-center'>
 <button onClick={()=>{
                 state("mens-shoes")
            }}>   👟 Shoes</button>
            </div>
        </div>
    </div>
  )
}

export default Categories