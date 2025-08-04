import React from 'react';
import './Category.css';
import { categories } from '../../../assets/assets';

const Category = ({ isActive, setIsActive, sizes, setSizes }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-5 px-4'>

      <h2 className='text-xl md:text-3xl font-bold text-center mt-2 mb-3'>
        "Find Your Flow – One Category at a Time."
      </h2>
 
      <p className='text-justify md:text-center max-w-3xl mb-6'>
        Explore our thoughtfully organized categories designed to make your shopping effortless and inspiring...
      </p>

      {/* Horizontal scrollable container */}
      <div className="flex  flex-row gap-6 w-full overflow-x-auto scrollbar-hide px-1">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setIsActive(prev => prev === item.name ? "All" : item.name)}
              className="flex flex-col justify-center items-center gap-2 p-2 min-w-[120px] md:min-w-[160px] rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className={`w-24 h-24 md:w-40 md:h-40 object-cover border-2 p-2 rounded-full ${
                  isActive === item.name ? 'active' : ''
                }`}
              />
              <div>
                
              </div>
              <p className="text-sm md:text-base text-center">{item.name}</p>
            </div>
          );
        })}
  
      </div>
      <div>
      </div>
      <div><input type="" /></div>

      <hr className='w-full mt-3' />
    </div>
  );
};

export default Category;
