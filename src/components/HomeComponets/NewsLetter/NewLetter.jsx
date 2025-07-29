import React from 'react'
import './NewsLetter.css'
import { BadgeCheck, ShieldCheck, Headphones } from "lucide-react";
const NewLetter = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-5 px-4 w-full h-[400px]'>

            <h2 className='text-xl md:text-3xl font-bold text-center mt-2 mb-3'> Subscribe </h2>
            <div className='flex justify-center items-center mb-5'>
                <form className='flex justify-center items-center gap-3.5' >
                    <input type="text" className='md:px-20 px-5 py-2 border-2 border-gray-900 rounded-md outline-0 text-start ' placeholder='Enter your text ' />
                    <button className='px-5 bg-black text-gray-200 py-2 border-2 border-gray-900 rounded-xl'>Send</button>
                </form>
            </div>
            <div className='flex flex-row md:flex-row justify-evenly items-center w-full gap-5 md:gap-19 inter '>
                <div className='flex flex-col justify-center items-center mt-5 px-4'>
                    <BadgeCheck className='md:w-12 md:h-12 h-10 w-10  text-black' />
                    <h2 className='text-base md:text-3xl font-bold text-center mt-2 mb-3 '>Quality</h2>
                </div>
                <div className='flex flex-col justify-center items-center mt-5 px-4'>
                    <ShieldCheck className='md:w-12 md:h-12 w-10 h-10 text-black' />
                    <h2 className='text-base md:text-3xl font-bold text-center mt-2 mb-3 '>Trustable</h2>
                </div>
                <div className='flex flex-col justify-center items-center mt-5 px-4'>
                    <Headphones className='md:w-12 md:h-12  w-10 h-10 text-black' />
                    <h2 className='text-base md:text-3xl font-bold text-center mt-2 mb-3 '>Support  </h2>
                </div>

            </div>
            <hr className='w-[80%] h-px mb-10  bg-gray-200 border-0 dark:bg-gray-700' />

        </div>
    )
}

export default NewLetter