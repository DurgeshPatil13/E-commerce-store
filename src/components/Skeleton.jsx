import React from 'react'

const Skeleton = () => {
  return (

<div className="bg-white h-90  rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition duration-300">
  {/* Product Image */}
<div className="h-45 w-full overflow-hidden rounded-lg bg-gray-100">
f
</div>

  {/* Product Details */}
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-sm text-gray-600">

    </div>

    <h3 className="text-lg line-clamp-1 font-semibold text-gray-900">

    </h3>

    <p className="md:text-2xl text-md flex font-bold text-gray-900">

    </p>
  </div>

  {/* Button */}
  <button className="w-full flex gap-2 items-center justify-center border-2 border-black rounded-lg py-2 font-medium hover:bg-black hover:text-white transition">
   

  </button>
</div>
  )
}

export default Skeleton