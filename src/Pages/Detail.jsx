import { MdCurrencyRupee } from "react-icons/md";
import { FaStar, FaHeart } from "react-icons/fa";

const Detail = ({ product }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      <div className="max-w-7xl mx-auto p-8">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image */}

          <div className="bg-white rounded-xl p-8">
            <img
              src="https://images.unsplash.com/photo-1778880984258-3427fc69f1a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              className="w-full h-122.5 object-contain"
            />
          </div>

          {/* Details */}

          <div>

            <h1 className="text-4xl font-bold">
           {/* title */}
           Title
            </h1>

            <div className="flex items-center gap-3 mt-4">

              <FaStar className="text-yellow-400"/>

              <span>
         {/* rating */}
4.5
              </span>

              <span className="text-gray-400">
                {/* ({product.reviews.length} Reviews) */}
                (5 reviews)
              </span>

            </div>

            <div className="flex items-center mt-6">

              <MdCurrencyRupee size={28}/>

              <h2 className="text-4xl font-bold">
                {/* {product.price} */}
                450
              </h2>

              <span className="ml-4 bg-green-500 px-3 py-1 rounded">
                {/* {product.discountPercentage}% OFF */}
                20% OFF
              </span>

            </div>

            <div className="mt-8 space-y-3">

              <p><b>Brand:</b> 
              {/* {product.brand} */}
              New Balance
              </p>

              <p><b>Category:</b> 
              {/* {product.category} */}
              Shoe
              </p>

              {/* <p><b>SKU:</b> {product.sku}</p> */}

              <p className="text-green-400">
                {/* {product.availabilityStatus} */}
                Available
              </p>

              <p>
                {/* {product.shippingInformation} */}
Ships in 3-5 business days
              </p>

              <p>
                {/* {product.warrantyInformation} */}
1 Week Warranty
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
            {/* {product.description} */}
            The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
          </p>

        </div>

        {/* Tags */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Tags
          </h2>

          {/* <div className="flex gap-3">

            {product.tags.map(tag=>(
              <span
                key={tag}
                className="bg-red-500 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}

          </div> */}

        </div>

        {/* Specifications */}

        <div className="mt-14">

          <h2 className="text-2xl font-bold mb-5">
            Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>Weight :10 kg</div>

            <div>
              {/* Dimensions :
              {product.dimensions.width} ×
              {product.dimensions.height} ×
              {product.dimensions.depth} */}
              very big
            </div>

            <div>
              Minimum Order :5
              {/* {product.minimumOrderQuantity} */}
            </div>

            <div>
              Return Policy :1 week
              {/* {product.returnPolicy} */}
            </div>

          </div>

        </div>

        {/* Reviews */}

        <div className="mt-14">

          <h2 className="text-2xl font-bold mb-5">
            Customer Reviews
          </h2>

          {/* <div className="space-y-5">

            {product.reviews.map((review,index)=>(
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

          </div> */}

        </div>

      </div>

    </div>
  );
};

export default Detail;