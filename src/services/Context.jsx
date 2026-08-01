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
const added=[...prev,{...product,quantity:1}];
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

function increasequantity(pro) {
  setcart((prev) =>
    prev.map((item) =>(
            item.id === pro.id && item.quantity < 5
        ? { ...item, quantity: item.quantity + 1}
        : item
      )  )
  );
}
function decreasequantity(pro) {
  setcart((prev) =>
    prev.map((item) =>(
      item.id === pro.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
      )  )
  );
}
return <LikeContext.Provider value={{like,decreasequantity,increasequantity,deletecartitem,setlike,likeset,setcart,setcartitem,cart}}>
    {children}
</LikeContext.Provider>
}
