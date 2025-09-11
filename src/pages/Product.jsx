import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileContext } from '../Context/FileContext';
import { MessageCircle } from 'lucide-react';
import RelatedProducts from '../components/HomeComponets/RelatedProducts/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { currency, collection, addToCart } = useContext(FileContext);

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('');

  // Find the product in collection by ID
  const productFetch = () => {
    const foundProduct = collection.find(
      (item) => String(item._id) === String(productId)
    );
    setProduct(foundProduct);
  };

  useEffect(() => {
    if (collection.length > 0) {
      productFetch();
    }
  }, [collection, productId]);

  // Show loading while product is being fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='md:px-20 px-5 md:py-10 py-5'>
      <div className='flex flex-col sm:flex-row gap-8 items-start'>
        
        {/* Product Image */}
        <div className='w-full sm:w-[45%]'>
          {/* Using product.images[0] instead of product.image 
              because backend sends "images" array */}
          <img
            src={product.images?.[0]}
            alt={product.name}
            className='w-full h-auto shadow-md rounded'
          />
        </div>

        {/* Product Details */}
        <div className="w-full sm:w-[55%]">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-justify mt-2 font-semibold text-gray-600">
            {product.description}
          </p>
          <p className="font-semibold mt-4">
            <span className="text-green-600 text-2xl">{currency}</span>
            <span className="font-bold text-xl"> {product.price} </span>
          </p>

          {/* Product Info Table */}
          <div className="overflow-x-auto my-6">
            <table className="w-full table-auto border-collapse border border-gray-300 text-sm text-left">
              <tbody>
                {/* Sizes Row */}
                <tr className="border-b">
                  <th className="p-2 font-semibold w-[30%] bg-gray-100">Available Sizes</th>
                  <td className="p-2">
                    <div className="flex flex-wrap gap-2">
                      {/* Using product.sizes instead of product.size because backend sends "sizes" array */}
                      {Array.isArray(product.sizes) && product.sizes.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setSize(item)}
                          className={`border cursor-pointer rounded-md border-gray-600 px-2 py-1 text-sm ${size === item ? 'bg-gray-600 text-white' : ''}`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* Material Row */}
                <tr className='border-b'>
                  <th className="p-2 font-semibold bg-gray-100">Material</th>
                  <td className="p-2">{product.material}</td>
                </tr>

                {/* Code Row */}
                <tr className='border-b'>
                  <th className="p-2 font-semibold bg-gray-100">Code</th>
                  <td className="p-2">{product.code}</td>
                </tr>

                {/* Model Row */}
                <tr className="border-b">
                  <th className="p-2 font-semibold bg-gray-100">Model</th>
                  <td className="p-2">{product.model}</td>
                </tr>

                {/* Brand Row */}
                <tr className="border-b">
                  <th className="p-2 font-semibold bg-gray-100">Brand</th>
                  <td className="p-2">{product.brand}</td>
                </tr>

                {/* Features Row */}
                <tr className="border-b">
                  <th className="p-2 font-semibold bg-gray-100">Features</th>
                  <td className="p-2">{product.features}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex mt-5 gap-3 flex-wrap">
            {/* WhatsApp Order Button */}
            <a
              href="https://wa.me/9032181871?text=Hi%20there%2C%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 cursor-pointer bg-black text-gray-200 py-2 border-2 border-gray-900 rounded-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              Order Now
            </a>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product._id, size)}
              className="px-5 bg-black text-gray-200 py-2 border-2 border-gray-900 rounded-xl cursor-pointer flex items-center gap-2"
            >
              Add to Cart
            </button>
          </div>

          {/* Divider */}
          <hr className="w-[98%] h-px mt-10 bg-gray-200 border-0 dark:bg-slate-200" />

          {/* Footer Info */}
          <div className="text-sm text-gray-500 mt-5 flex md:flex-row flex-col gap-2">
            <p>100% Original Products</p> |
            <p>20 Years of Experience</p> |
            <p>Best In Market</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className='mt-15'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (120)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 mt-10'>
          <p className='text-sm text-gray-700'>
            Cost-effective and durable: Products are lightweight, made from plastic/PVC materials for everyday office use.
          </p>
          <p className='text-sm text-gray-700'>
            Variety of formats: Many designs including strip files, clip files, button files, side/top opening covers, etc.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className='flex'>
        {/* Using product.category instead of product.categories because backend sends "category" */}
        <RelatedProducts category={product.category} />
      </div>
    </div>
  );
};

export default Product;
