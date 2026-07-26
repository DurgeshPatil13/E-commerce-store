import React from 'react'

import Banner from "../components/Banner"
import Card from "../components/Card"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
const Home = ({products,state,loading}) => {
  return (
    <div className="">
<Navbar/>
<Banner/>
<Categories state={state} />
<h3 className="text-white text-3xl mt-4 ml-4">
  Trending Products -
</h3>

  <div className="grid lg:grid-cols-4 lg:grid-row-1 sm:grid-cols-3 sm:grid-row-2 grid-cols-2 grid-row-2 lg:gap-10 gap-3 p-3 lg:p-6">
{products.map((pro)=>(
<Card loading={loading} pro={pro}/>

))}

  </div>

    </div>
  )
}

export default Home