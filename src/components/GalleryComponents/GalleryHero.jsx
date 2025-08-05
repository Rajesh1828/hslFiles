import React from 'react';
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion';

const imageGrid = [
  assets.gallery1,
  assets.gallery2,
  assets.gallery3,
  assets.gallery4,
  assets.gallery5,
  assets.gallery6,
];

const GalleryHero = () => {
  return (
    <div className="relative">
      {/* Hero Image with overlay */}
      <div className="relative">
        <img src={assets.ab_b} className="w-full h-[350px] object-cover" alt="hero" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Centered Text */}
        <div className="absolute inset-x-0 top-[150px] flex flex-col items-center justify-center text-white px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm md:text-base max-w-xl mt-2 text-white"
          >
            Explore our curated selection of files and resources. Organized, clean, and ready to download.
          </motion.p>

          {/* Scroll Down Icon */}
          <div className="mt-6 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* 🖼️ Grid Image Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through some of our recent uploads and files. Click to view in detail or download your favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageGrid.map((imgSrc, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 📬 Contact Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="py-12 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-8 font-light text-center text-gray-400 sm:text-lg">
            Got a question or feedback? Let us know — we're here to help.
          </p>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full bg-gray-700 text-white placeholder-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
                placeholder="Email address"
                required
              />
              <label htmlFor="email"
                className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-300">
                Your Email
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="subject"
                className="peer w-full bg-gray-700 text-white placeholder-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
                placeholder="Subject"
                required
              />
              <label htmlFor="subject"
                className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-300">
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows="5"
                className="peer w-full bg-gray-700 text-white placeholder-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
                placeholder="Your message"
              ></textarea>
              <label htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-300">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full sm:w-fit bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GalleryHero;
