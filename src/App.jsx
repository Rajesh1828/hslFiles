import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/HomeComponets/Navbar/Navbar'
import Gallery from './pages/Gallery'
import Footer from './components/HomeComponets/Footer/Footer'
const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='collections' element={<Collections/>}/>
        <Route path='product:id' element={<Product/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
    

    </div>
    </>
  )
}

export default App