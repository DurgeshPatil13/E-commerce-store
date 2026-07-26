
import {getProductBycategory} from "./services/productapi"

import { useState } from "react"
import { useEffect } from "react"
import Home from "./Pages/Home"
function App() {
const [productslist , setproductslist]=useState([])
const [category,setcategory]=useState("skin-care")
const [loading,setloading]=useState(false)
useEffect(()=>{

const get =async function cards() {
setloading(true)
  const getdata=await getProductBycategory(category);
  setproductslist(getdata);
  
};
get()
setloading(false)
},[category])

console.log(productslist)
  return (
<Home loading={loading} state={setcategory} products={productslist}/>
  )
}

export default App
