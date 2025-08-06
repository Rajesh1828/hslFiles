import React, { useContext } from 'react'
import { FileContext } from '../../../Context/FileContext'
import Productitem from '../ProductItems/Productitem'

const ProductDisplay = ({isActive, selectedSize}) => {
  const { collection } = useContext(FileContext)
   const collections = collection.slice(0, 20)


   const filtered = collections.filter(item => {
    const matchCategory = isActive === "All" || item.categories === isActive;
    const matchSize = !selectedSize  || item.sizes === selectedSize;
    return matchCategory && matchSize;
   });

  return (

    <div className='mt-10'>
      <h2 className='text-xl md:text-3xl font-bold text-center inter underline underline-offset-4 decoration-[1px]'>To products near you</h2>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 px-5 gap-4 mt-5'>
        {filtered.map((item, index) => (
          <Productitem key={index} id={item._id} name={item.name} image={item.image} />
        ))}
        
      </div>

    </div>
    

  
  )
}

export default ProductDisplay