import React, { useState } from 'react'
import Hero from '../components/HomeComponets/Hero/Hero'
import NewArrivels from '../components/HomeComponets/NewArrivels/NewArrivels'
import AboutOverView from '../components/HomeComponets/AvoutOverview/AboutOverView'
import Category from '../components/HomeComponets/Categories/Category'
import Grid from '../components/HomeComponets/Grid/Grid'
import ProductDisplay from '../components/HomeComponets/ProductDisplay/ProductDisplay'
import NewLetter from '../components/HomeComponets/NewsLetter/NewLetter'

const Home = () => {
  const[isActive, setIsActive] =useState("All")
  return (
    <>
    <Hero/>
    <NewArrivels/>
    <Category isActive={isActive} setIsActive={setIsActive} />
    <ProductDisplay isActive={isActive}/>
    <AboutOverView />
    <Grid/>
    <NewLetter/>

    </>
  )
}

export default Home