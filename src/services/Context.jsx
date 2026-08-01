import { createContext, useState } from "react";

export const LikeContext=createContext();
export const Contextprovider=({children})=>{
const [like, setlike] = useState(() => {
    const saved = localStorage.getItem("product");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });
  // like items
function likeset(product) {
  setlike((prev) => {
    const exist = prev.some((pro) => pro.id === product.id);

    if (exist) {
      return prev;
    }

    const updated = [...prev, product];

    localStorage.setItem("product", JSON.stringify(updated));

    return updated;
  });
}

// cart delete
const[cart,setcart]=useState(()=>{
  const saved=localStorage.getItem("cartproduct")
  if(saved){
        return JSON.parse(saved);
 
  }
         
      return [];
})
function setcartitem(product){
setcart((prev)=>{
  const exist=prev.some((item)=>item.id===product.id)
if(exist){
  return prev
}
const added=[...prev,product];
console.log(product.id)
  localStorage.setItem("cartproduct", JSON.stringify(added));
  return added
})


}
function deletecartitem(pro){
  setcart((prev)=>{
    const deleteitem=prev.filter((item)=>item.id!==pro.id)
    localStorage.setItem("cartproduct",JSON.stringify(deleteitem))
    return deleteitem;
  })

}
// for quanitity
const [quantity,setquantity]=useState(1)
console.log(quantity)
return <LikeContext.Provider value={{like,quantity,setquantity,deletecartitem,setlike,likeset,setcart,setcartitem,cart}}>
    {children}
</LikeContext.Provider>
}
