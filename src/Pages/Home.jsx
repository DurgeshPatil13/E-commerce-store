import React from 'react'
import Banner from "../components/Banner"
import Card from "../components/Card"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import Pagination from '../components/Pagination'

const Home = ({state,loading,totalpages,current,setcurrent,content}) => {
  return (
    <div className="">
<Navbar/>
<Banner/>
<Categories state={state} />
<h3 className="text-white text-3xl mt-4 ml-4">
  Trending Products -
</h3>
{loading?(
   <div className="flex justify-center items-center h-200">
    <div className="w-10 h-10 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin"></div>
  </div>
) :(

  <div className="grid lg:grid-cols-4 lg:grid-row-1 sm:grid-cols-3 sm:grid-row-2 grid-cols-2 grid-row-2 lg:gap-10 gap-3 p-3 lg:p-6">
{content.map((pro)=>(
<Card  pro={pro}/>

))}

  </div>)
}
<Pagination current={current} setcurrent={setcurrent} totalpages={totalpages}/>
    </div>
  )
}

export default Home