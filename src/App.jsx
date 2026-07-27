
import {getProductBycategory, getProducts} from "./services/productapi"

import { useState } from "react"
import { useEffect } from "react"
import Home from "./Pages/Home"
function App() {
// states
const [productslist , setproductslist]=useState([])
const [category,setcategory]=useState("")
const [loading,setloading]=useState(false)
const [current,setcurrent]=useState(1);


const dataperpage=8;
let totalpages=Math.ceil(productslist.length/dataperpage);
let lastidx=current*dataperpage;
let firstidx=lastidx-dataperpage;
let content=productslist.slice(firstidx,lastidx)

useEffect(()=>{
const get =async function cards() {
setloading(true)
if(category!==""){
   const getdata=await getProductBycategory(category);
  setproductslist(getdata);
  setloading(false)
}
if(category==""){
  const getdata=await getProducts()
  setproductslist(getdata);
  setloading(false)
}  
};
get()

},[category])

console.log(productslist)
  return (
<Home content={content} current={current} setcurrent={setcurrent} totalpages={totalpages} loading={loading} state={setcategory} products={productslist}/>
  )
}

export default App
