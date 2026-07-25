
import Banner from "./components/Banner"
import Card from "./components/Card"
import Categories from "./components/Categories"
import Navbar from "./components/Navbar"
import products from "./Data"
function App() {

  return (
    <div className="">
<Navbar/>
<Banner/>
<Categories/>
<h3 className="text-white text-3xl mt-4 ml-4">
  Trending Products -
</h3>

  <div className="grid lg:grid-cols-4 lg:grid-row-1 sm:grid-cols-3 sm:grid-row-2 grid-cols-2 grid-row-2 lg:gap-10 gap-3 p-3 lg:p-6">
{products.map((pro)=>(
<Card pro={pro}/>
))}

  </div>

    </div>
  )
}

export default App
