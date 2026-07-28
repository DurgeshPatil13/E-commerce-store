import { Button } from '@material-tailwind/react';
import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Pagination = ({totalpages,current,setcurrent}) => {
    function numbtns(){
let btn=[];

for(let i=1;i<=totalpages;i++){
    btn.push(
    <button
  onClick={() => 
    
    setcurrent(i)
  }
  className={`${i === current ? "bg-red-400" : "bg-red-600"} px-3 py-2 rounded-xl text-white`}
>
  {i}
</button>)
   
}
 return btn
}
  return (
  <div className="flex items-center justify-center gap-3 py-8">
      <button disabled={current==1} onClick={()=>setcurrent((prev)=>( prev>1?prev-1:1))}
        className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FaArrowLeft size={14} />
        Previous
      </button>

  
{numbtns()}
      <button disabled={current==totalpages} onClick={()=>setcurrent((prev)=>( prev<totalpages?prev+1:totalpages))}
        className="flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2 font-medium text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
        <FaArrowRight size={14} />
      </button>
    </div>
  )
}

export default Pagination