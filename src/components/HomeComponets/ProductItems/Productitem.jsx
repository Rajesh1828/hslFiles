import React, { useContext } from 'react'
import './Productitem.css'
import { FileContext } from '../../../Context/FileContext'

const Productitem = ({ id, name, image }) => {
    // const[itemCount,setItemCount]= useState(0)
    const{cartItems,addToCart,removeFromCart}=useContext(FileContext)
    return (
        <div className=' bg-gray-100 shadow-md  rounded-2xl px-5 py-4 animation-fadeIn' >
            <div className=''>
                <img  src={image} alt="" className=' w-[100%] h-[200px] transition duration-500 ease-in-out hover:scale-103 rounded-2xl' />
                {
                  !cartItems[id]? <p onClick={()=>addToCart(id)} className='text-black text-center text-sm bg-white rounded-full p-2 mt-2 cursor-pointer'>AddItem</p>:
                  <div className='flex justify-center mt-1  gap-3'>
                  <button onClick={()=>addToCart(id)} className='text-green-600 text-xl bg-white rounded-full p-2 cursor-pointer'>+</button>
                  <p className='text-black bg-white rounded-full p-2 text-base'>{cartItems[id]}</p>
                  <button onClick={()=>removeFromCart(id)} className='text-red-600 text-xl bg-white rounded-full p-2 cursor-pointer'>-</button>
            
                  </div>
                }
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-base md:text-md font-xs'>{name}</h2>
            </div>

        </div>
    )
}

export default Productitem