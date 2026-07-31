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
return <LikeContext.Provider value={{like,setlike,likeset,setcart,setcartitem,cart}}>
    {children}
</LikeContext.Provider>
}