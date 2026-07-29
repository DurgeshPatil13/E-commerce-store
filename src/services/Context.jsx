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
return <LikeContext.Provider value={{like,setlike,likeset}}>
    {children}
</LikeContext.Provider>
}