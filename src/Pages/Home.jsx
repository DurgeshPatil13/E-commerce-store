
import React from 'react'
import Banner from "../components/Banner"
import Card from "../components/Card"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import Pagination from '../components/Pagination'
 
const Home = ({ state, search, setSearch, loading, totalpages, current, setcurrent, content }) => {
  return (
    <div className="bg-[#0c0f1a] min-h-screen">
      <Navbar search={search} setSearch={setSearch} />
      <Banner />
      <Categories state={state} />
 
      <h3 className="text-white text-2xl sm:text-3xl font-bold mt-12 mb-2 px-4 sm:px-6" style={{fontFamily:"'Space Grotesk', sans-serif"}}>
        Trending Products
      </h3>
 
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="w-10 h-10 rounded-full border-4 border-[#2a3145] border-t-[#ff4d6d] animate-spin"></div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 sm:gap-5 lg:gap-6 p-4 sm:p-6">
          {content.map((pro) => (
            <Card key={pro.id} pro={pro} />
          ))}
        </div>
      )}
 
      <div className="px-4 sm:px-6 pb-10">
        <Pagination current={current} setcurrent={setcurrent} totalpages={totalpages} />
      </div>
    </div>
  )
}
 
export default Home