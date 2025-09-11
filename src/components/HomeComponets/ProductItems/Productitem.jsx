import React, { useContext,  } from 'react'
import './Productitem.css'
import { Link } from 'react-router-dom'
import { FileContext } from '../../../Context/FileContext'

const Productitem = ({ id, name, images }) => {
    
    const{currency}=useContext(FileContext)
    return (
        <div className=' rounded-2xl px-5 py-4 animation-fadeIn' >
            <Link to ={`/product/${id}`}>
            <div>
                <img  src={images} alt="" className=' w-[100%]  transition duration-500 ease-in-out hover:scale-103 rounded-2xl' />
                  <div className='flex justify-center mt-1  gap-3'>
                  </div>
            </div>  
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-base md:text-md font-xs'>{name}{currency}</h2>
            </div>
            </Link>

        </div>
    )
}

export default Productitem