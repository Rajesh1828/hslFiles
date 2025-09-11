import React from 'react'
import { assets } from '../../../assets/assets'

const AboutOverView = () => {
  return (
    <>
    <div className='justify-center  items-center mt-7'   >
        <h2 className='md:text-4xl text-xl font-bold text-center mt-2 mb-3 px-5'>Welcome to a new era of elegance and organization.
</h2>
<p className='md:text-center md:px-30 px-5  text-justify'>Our New Arrivals collection brings together the finest in modern stationery — from premium planners and elegant writing tools to luxurious paper designed to inspire. Whether you're journaling your dreams, organizing your schedule, or simply expressing yourself, these thoughtfully crafted items blend timeless style with everyday practicality.

</p>
    </div>
    <div className='flex flex-col md:flex-row justify-evenly items-center w-full gap-19'>
      <div className='md:w-1/2 px-10 md:py-10 py-5'>
        <img src={assets.about_blog_banner} alt="" className='w-full' />
      </div>
      <div className='md:w-1/2 w-full'>
      <h2 className='text-xl md:text-3xl font-bold md:px-10 px-5'>"Write Bold. Plan Smart. Live Inspired."

</h2>
<div className='mt-5 flex flex-col gap-3 px-5 md:px-10 md:py-10'>

        <p className=' text-justify'>Hitech Stationery Files is your trusted destination for premium files and office organization products. We specialize in a wide range of stationery solutions, including document bags, file folders, clip files, display books, and more — all crafted for durability and everyday convenience </p>
        <p className=' text-justify'>Whether you’re managing personal paperwork or keeping your workplace organized, Hitech Stationery Files offers products designed to keep your documents neat, secure, and easy to access. Our commitment to quality ensures that every file, folder, or storage solution meets the highest standards, giving you excellent value for money</p>
        <p className=' text-justify'>From lightweight plastic folders to heavy-duty office files, we make it simple to find the right tools to streamline your workspace. Choose Hitech Stationery Files for organization made easy — stylish, practical, and built to last.
        </p>
</div>
      </div>
    </div>

    </>
  )
}

export default AboutOverView
