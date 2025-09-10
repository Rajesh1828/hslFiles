import React from 'react';
import './NewArrivels.css'; 
import { assets } from '../../../assets/assets';

const NewArrivels = () => {
  const logos = [
    {
      id: 1,
      image: assets.scribbling_books,
      title: "Planner",
    },
    {
      id: 2,
      image: assets.security_bags,
      title: "Writing Tools",
    },
    {
      id: 3,
      image: assets.strip_files,
      title: "Paper",
    },
    {
      id: 4,
      image: assets.spirac_books,
      title: "Planner",
    },
    {
      id: 5,
      image: assets.spiral_books,
      title: "Writing Tools",
    },
    {
      id: 6,
      image: assets.zip_files,
      title: "Paper",
    },
    {
      id: 5,
      image: assets.box_files,
      title: "Writing Tools",
    },
    {
      id: 6,
      image: assets.plastic_Lined_zipper_bratch,
      title: "Paper",
    },
    {
      id: 5,
      image: assets.zip_files,
      title: "Writing Tools",
    },
    {
      id: 6,
      image: assets.zipper_bags,
      title: "Paper",
    },


  ];

  return (
    <>
 <div className="h-[450px] ">
  <h1 className="text-xl  font-bold md:text-2xl text-center mt-5 text-black">
    Elevate Your Desk – New Arrivals in Style!
  </h1>

  <p className="text-center text-sm mt-3  text-gray-900">
    Step into a world of premium paper, elegant planners, and luxurious writing tools.
    Our latest collection blends sophistication with everyday practicality.
  </p>

  <div className="text-center pt-10 overflow-hidden">
    <div className="relative w-full">
      <div className="flex gap-10  animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`client-logo-${index}`}
            className=" w-30 object-cover    border-1 border-stone-200 shadow-amber-100 shadow-2xl rounded-full hover:border-pink-400"
          />
        ))}
      </div>
      <div className="flex gap-10 mt-3  animate-scroll-left">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`client-logo-${index}`}
            className=" w-30 object-cover    border-1 border-stone-200 shadow-amber-100 shadow-2xl rounded-full hover:border-pink-400"
          />
        ))}
      </div>
    </div>
  </div>
</div>



    

    </>
  );
};

export default NewArrivels;
