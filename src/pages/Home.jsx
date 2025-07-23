import React from 'react'
import Hero from '../components/HomeComponets/Hero/Hero'
import NewArrivels from '../components/HomeComponets/NewArrivels/NewArrivels'
import AboutOverView from '../components/HomeComponets/AvoutOverview/AboutOverView'
import Category from '../components/HomeComponets/Categories/Category'
import Grid from '../components/HomeComponets/Grid/Grid'

const Home = () => {
  return (
    <>
    <Hero/>
    <NewArrivels/>
    <Category/>
    <AboutOverView/>
    <Grid/>

    </>
  )
}

export default Home