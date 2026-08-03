

import React from 'react'
 
const cats = [
  { key: "smartphones", label: "Electronics", emoji: "📱" },
  { key: "womens-dresses", label: "Fashion", emoji: "👗" },
  { key: "beauty", label: "Beauty", emoji: "💄" },
  { key: "mens-shoes", label: "Shoes", emoji: "👟" },
];
 
const Categories = ({ state }) => {
  return (
    <div className='text-white mt-10 px-4 sm:px-6'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-4' style={{fontFamily:"'Space Grotesk', sans-serif"}}>
        Shop by category
      </h2>
 
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4'>
        {cats.map((c) => (
          <button
            key={c.key}
            onClick={() => state(c.key)}
            className='group flex items-center justify-center gap-2 bg-[#151a29] border border-[#2a3145] hover:border-[#ff4d6d] hover:bg-[#1c2333] rounded-2xl py-4 sm:py-5 transition-all duration-200'
          >
            <span className='text-2xl sm:text-3xl group-hover:scale-110 transition-transform'>{c.emoji}</span>
            <span className='text-base sm:text-lg font-medium'>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
 
export default Categories
 