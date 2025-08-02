import React, { useEffect, useState, useContext } from 'react';
import { FileContext } from '../Context/FileContext';
import Productitem from '../components/HomeComponets/ProductItems/Productitem';

const Collections = () => {
  const { collection } = useContext(FileContext);

  const [showFilters, setShowFilters] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);

  // Handle checkbox changes
  const filterItems = (e) => {
    const value = e.target.value;
    if (categories.includes(value)) {
      setCategories((prev) => prev.filter((item) => item !== value));
    } else {
      setCategories((prev) => [...prev, value]);
    }
  };

  // Initial collection load
  useEffect(() => {
    setFilteredData(collection);
  }, [collection]);

  // Apply filters on category change
  useEffect(() => {
    let filteredCopy = collection.slice();
    if (categories.length > 0) {
      filteredCopy=filteredCopy.filter((item) =>
        categories.includes(item.categories)
      );
    }
    setFilteredData(filteredCopy);
  }, [categories, collection]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mb-10'>
      {/* Filter options */}
      <div className='min-w-60 sm:ml-3 md:ml-5'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          Filters
          <span>
            {showFilters ? (
              <span className='text-3xl sm:hidden'>👇</span>
            ) : (
              <span className='text-3xl sm:hidden'>👆</span>
            )}
          </span>
        </p>

        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${
            showFilters ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-bold'>Categories</p>
          <div className='flex flex-col gap-2'>
            <label className='flex gap-2'>
              <input type='checkbox' value='Business Card' onChange={filterItems} />
              BusinessCard
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Certificate' onChange={filterItems} />
              Certificate
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Document File' onChange={filterItems} />
              DocumentFile
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Document Gag' onChange={filterItems} />
              DocumentGag
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Strip File' onChange={filterItems} />
              StripFile
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='File_Folder' onChange={filterItems} />
              File Folder
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Display Book' onChange={filterItems} />
              DisplayBook
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Others' onChange={filterItems} />
              Others
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {filteredData.map((item, index) => (
          <Productitem key={index} id={item._id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
