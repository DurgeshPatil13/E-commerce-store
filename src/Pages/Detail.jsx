import { MdCurrencyRupee } from "react-icons/md";
import { FaStar, FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchproducts } from "../services/productapi";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
const Detail = ({ product }) => {
  
  const[search,setsearch]=useState({})
  const {id}=useParams()
  console.log(id);

  useEffect(()=>{
async function searchresult() {
  const data=await searchproducts(id);
 
  setsearch(data);
console.log(data);
}
searchresult();
 
  },[id])
  return (
    <div className="min-h-screen bg-[#0e1627] text-gray-300">
 <Link to="/"><IoArrowBackOutline className='absolute top-2 left-4 text-2xl md:text-3xl' /></Link>   
      <div className="max-w-7xl mx-auto p-8">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image */}

          <div className="bg-white rounded-xl p-8">
            <img
              src={search.thumbnail}
              className="w-full h-122.5 object-cover"
            />
          </div>

          {/* Details */}

          <div>

            <h1 className="text-4xl font-bold">
           {/* title */}
           {search.title}
            </h1>

            <div className="flex items-center gap-3 mt-4">

              <FaStar className="text-yellow-400"/>

              <span>
         {/* rating */}
{search.rating}
              </span>

              <span className="text-gray-400">
                
                {/* ({search.reviews.length} Reviews)  */}
                
        
              </span>

            </div>

            <div className="flex items-center mt-6">

              <MdCurrencyRupee size={28}/>

              <h2 className="text-4xl font-bold">
                {search.price} 
                
              </h2>

              <span className="ml-4 bg-green-500 px-3 py-1 rounded">
                 {search.discountPercentage}% OFF 
            
              </span>

            </div>

            <div className="mt-8 space-y-3">

              <p><b>Brand:</b> 
              {search.brand} 
            
              </p>

              <p><b>Category:</b> 
               {search.category} 
             
              </p>

               <p><b>SKU:</b> {search.sku}</p> 

              <p className="text-green-400">
                {search.availabilityStatus} 
           
              </p>

              <p>
               {search.shippingInformation} 

              </p>

              <p>
                 {search.warrantyInformation} 

              </p>

            </div>

            <div className="flex gap-5 mt-10">

              <button className="bg-red-500 px-8 py-3 rounded-lg">
                Add To Cart
              </button>

              <button className="bg-gray-800 p-4 rounded-lg">
                <FaHeart/>
              </button>

            </div>

          </div>

        </div>

        {/* Description */}

        <div className="mt-14">

          <h2 className="text-2xl font-bold mb-4">
            Description
          </h2>

          <p className="text-gray-300 leading-8">
             {search.description} 
           
          </p>

        </div>

        {/* Tags */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Tags
          </h2>

       <div className="flex gap-3">

            {search.tags?.map(tag=>(
              <span
                key={tag}
                className="bg-red-500 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))} 

          </div> 

        </div>

        {/* Specifications */}

        <div className="mt-14">

          <h2 className="text-2xl font-bold mb-5">
            Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>Weight :{search.weight}</div>

            <div>
               Dimensions :
               {search.dimensions?.width} x  {search.dimensions?.height} x 
 {search.dimensions?.depth}  
            
            </div>

            <div>
        
             {search.minimumOrderQuantity} 
            </div>

            <div>
            
             {search.returnPolicy} 
            </div>

          </div>

        </div>

        {/* Reviews */}

        <div className="mt-14">

          <h2 className="text-2xl font-bold mb-5">
            Customer Reviews
          </h2>

           <div className="space-y-5">

            {search.reviews?.map((review,index)=>(
              <div
                key={index}
                className="bg-slate-800 p-5 rounded-xl"
              >

                <h3 className="font-bold">
                  {review.reviewerName}
                </h3>

                <p className="text-yellow-400">
                  ⭐ {review.rating}
                </p>

                <p className="mt-2">
                  {review.comment}
                </p>

              </div>
            ))} 

          </div> 

        </div>

      </div>

    </div>
  );
};

export default Detail;