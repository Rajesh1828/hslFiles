import React from 'react';
import './NewArrivels.css'; // Define scroll animation here
import { assets } from '../../../assets/assets';

const NewArrivels = () => {
  const logos = [
    {
      id: 1,
      image: assets.s_1,
      title: "Planner",
    },
    {
      id: 2,
      image: assets.s_2,
      title: "Writing Tools",
    },
    {
      id: 3,
      image: assets.s_3,
      title: "Paper",
    },
    {
      id: 4,
      image: assets.s_1,
      title: "Planner",
    },
    {
      id: 5,
      image: assets.s_2,
      title: "Writing Tools",
    },
    {
      id: 6,
      image: assets.s_3,
      title: "Paper",
    },
    {
      id: 5,
      image: assets.s_2,
      title: "Writing Tools",
    },
    {
      id: 6,
      image: assets.s_3,
      title: "Paper",
    },
    {
      id: 5,
      image: assets.s_2,
      title: "Writing Tools",
    },
    {
      id: 6,
      image: assets.s_3,
      title: "Paper",
    },


  ];

  return (
    <>
 <div className="h-[450px] ">
  <h1 className="text-3xl  font-bold md:text-4xl text-center mt-5 text-black">
    Elevate Your Desk – New Arrivals in Style!
  </h1>

  <p className="text-center mt-3 font-semibold text-gray-900">
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
            className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 border-2 border-red-200 shadow-amber-100 shadow-2xl rounded-full hover:border-amber-400"
          />
        ))}
      </div>
      <div className="flex gap-10 mt-3  animate-scroll-left">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`client-logo-${index}`}
            className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 border-2 border-black rounded-full hover:border-amber-400"
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
