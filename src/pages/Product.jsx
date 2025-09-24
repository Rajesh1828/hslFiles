import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileContext } from '../Context/FileContext';
import { MessageCircle } from 'lucide-react';
import RelatedProducts from '../components/HomeComponets/RelatedProducts/RelatedProducts';
const Product = () => {
  const { productId } = useParams();
  const { currency, collection, addToCart } = useContext(FileContext);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [size, setSize] = useState('');

  // Fetch product based on productId
  const fetchProductData = () => {
    const prod = collection.find(item => item._id === productId);
    if (prod) {
      setProduct(prod);
      setSelectedImage(prod.images[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, collection]);

  // Calculate discount %
  const discountPercent =
    product?.mrp && product?.price && product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  // WhatsApp order link
  const whatsappMessage = `Hi, I want to order ${product?.name} in size ${size || 'N/A'}.`;
  const whatsappLink = `https://wa.me/9032181871?text=${encodeURIComponent(whatsappMessage)}`;

  if (!collection || !product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-lg">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Product Images */}
          <div className="flex-1 flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 lg:w-1/5 overflow-x-auto lg:overflow-y-auto">
              {product?.images?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`${product?.name} - ${index + 1}`}
                  onClick={() => setSelectedImage(item)}
                  className={`w-30 h-30 object-cover rounded-lg border cursor-pointer 
                    ${selectedImage === item ? 'border-black' : 'border-gray-300'}`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img
                src={selectedImage}
                alt={product?.name}
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
            <p className="text-gray-600 mb-4">{product?.description}</p>

            {/* Price + MRP + Discount */}
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              {currency}{product?.price}
              {product?.mrp && (
                <span className="text-gray-500 line-through text-lg ml-3">
                  {currency}{product.mrp}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="text-green-600 text-lg ml-3">
                  {discountPercent}
                </span>
              )}
            </p>
             <tr className="border-b">
                    <th className="py-2 font-semibold text-gray-700">MRP:-</th>
                    <td className="py-2 line-through"> <span className=" line-through pl-2">{product?.code}</span></td>
                  </tr>

            {/* Info Table */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <table className="w-full text-sm text-left border-collapse">
                <tbody>
                  <tr className='border-b'>
                    <th className="py-2 font-semibold text-gray-700">Sizes</th>
                    <td className="py-2">
                      {Array.isArray(product?.sizes) && product.sizes.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setSize(item)}
                          className={`border border-gray-300 px-4 py-2 rounded-lg mr-2 transition 
                            ${size === item ? 'bg-pink-500 text-white border-pink-600' : 'bg-white hover:bg-gray-100'}`}
                        >
                          {item}
                        </button>
                      ))}
                    </td>
                  </tr>

                  <tr className="border-b">
                    <th className="py-2 font-semibold w-[30%] text-gray-700">Material</th>
                    <td className="py-2">{product?.material}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-2 font-semibold text-gray-700">Model</th>
                    <td className="py-2">{product?.model}</td>
                  </tr>
                 
                  <tr className="border-b">
                    <th className="py-2 font-semibold text-gray-700">Brand</th>
                    <td className="py-2">{product?.brand}</td>
                  </tr>
                  <tr>
                    <th className="py-2 font-semibold text-gray-700">Features</th>
                    <td className="py-2">{product?.features}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => {
                  if (!size) {
                    alert('Please select a size');
                    return;
                  }
                  addToCart(product._id, size);
                }}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

              {/* WhatsApp Order Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 cursor-pointer bg-black text-gray-200 py-2 border-2 border-gray-900 rounded-xl flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                Order Now
              </a>
            </div>

            {/* Footer Info */}
            <hr className="w-[98%] h-px mt-10 bg-gray-200 border-0 dark:bg-slate-200" />
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
        <div className='flex mt-10'>
          <RelatedProducts category={product?.category} />
        </div>
      </div>
    </div>
  );
};

export default Product;
