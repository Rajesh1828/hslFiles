import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Phone, Mail, Menu, ArrowUp } from 'lucide-react';
import { assets } from '../../../assets/assets';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const[visible, setVisible] = useState(false);



  const scrollToBottom =()=>{
    if(window.scrollY>300){
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  }
  const scrollToTop =()=>{
     window.scrollTo({
      top: 0,
      behavior: 'smooth'
     });
  }
  useEffect(()=>{
    window.addEventListener('scroll', scrollToBottom);
    return () => {
      window.removeEventListener('scroll', scrollToBottom);
    }
  },[])
  const navLinkClass = ({ isActive }) =>
    isActive ? 'nav-item active' : 'nav-item';
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);


  return (
    <>
 {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    
      {/* Top Header */}
      <div className="flex justify-between items-center bg-black text-white px-6 py-3 text-[12px] font-semibold">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+91 9999999999</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>hitechfiles@gmail.com</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="Hitech-Files" className="logo" />
        </Link>
        <ul className="nav-links relative">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/collections" className={navLinkClass}>Collection</NavLink></li>
          <li><NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink></li>

          {/* Categories with Dropdown */}
          <li className="relative group">
            <NavLink to="/categories" className={navLinkClass}>Categories ▼ </NavLink>

            {/* Dropdown menu */}
            <ul className="absolute top-full left-0 z-50 w-48 bg-white shadow-md rounded-md hidden group-hover:block">
              {[
                'Button-Files', 'Strip-files', 'Binder-files', 'Zip-files', 'Check-book holders',
                'Office-files', 'Certificate-files& folders', 'Display-Book', 'L-Shaped', 'Expanding',
                'Document-Case', 'Card-Holders', 'Conference-Files', 'Note-Books', 'Spirals', 'Sticker-files'
              ].map((product, index) => (
                <li key={index}>
                  <NavLink
                    to={`/categories/product-${index + 1}`}
                    className="block px-4 py-2 hover:bg-[#000000] hover:text-white"
                  >
                    {product}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>


        <div className="right-section flex items-center gap-4">
          <NavLink to="/contact">
            <button className="bg-black flex items-center gap-2 py-2 px-5 rounded-2xl text-white cursor-pointer uppercase">
              Contact <Phone className="w-4 h-4 text-white" />
            </button>
          </NavLink>
          <div className="menu-icon md:hidden cursor-pointer" onClick={toggleMenu}>
            <Menu className="w-8 h-8" />
          </div>
        </div>

        {/* Mobile Sidebar */}
       {/* Mobile Sidebar */}
<div className={`sidebar ${menuOpen ? 'open' : ''}`}>
  <div className="sidebar-content">
    <button className="close-btn" onClick={closeMenu}>×</button>
    
    <NavLink to="/" className="mobile-link" onClick={closeMenu}>Home</NavLink>
    <NavLink to="/about" className="mobile-link" onClick={closeMenu}>About</NavLink>
    <NavLink to="/collections" className="mobile-link" onClick={closeMenu}>Collections</NavLink>
    <NavLink to="/gallery" className="mobile-link" onClick={closeMenu}>Gallery</NavLink>

    {/* Categories with dropdown */}
    <div className="relative">
      <div
        onClick={() => setShowCategoryDropdown(prev => !prev)}
        className="mobile-link cursor-pointer flex justify-between items-center"
      >
        Categories
        <span>{showCategoryDropdown ? '▲' : '▼'}</span>
      </div>

      {showCategoryDropdown && (
        <ul className="bg-white rounded-md shadow-md mt-2 max-h-[300px] overflow-y-auto">
          {[
            'Button-Files', 'Strip-files', 'Binder-files', 'Zip-files', 'Check-book holders',
            'Office-files', 'Certificate-files & folders', 'Display-Book', 'L-Shaped', 'Expanding',
            'Document-Case', 'Card-Holders', 'Conference-Files', 'Note-Books', 'Spirals', 'Sticker-files'
          ].map((product, index) => (
            <li key={index}>
              <NavLink
                to={`/categories/product-${index + 1}`}
                className="block px-4 py-2 text-sm hover:bg-black hover:text-white"
                onClick={closeMenu}
              >
                {product}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Navbar;
