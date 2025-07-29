import React from 'react'
import { assets } from '../../../assets/assets'

const AboutHero = () => {
  return (
    <div>
      <img src={assets.ab_b} className='w-full h-[350px]' alt="" /> 
      <div className='flex flex-col justify-center items-center absolute inset-x-0 top-[300px] '>
      <h2 className='text-3xl font-bold text-center md:text-5xl mt-2 mb-3 '>About</h2>
      <p className='text-justify text-amber-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatem.</p>
      </div>   
    
    </div>
  )
}

export default AboutHero