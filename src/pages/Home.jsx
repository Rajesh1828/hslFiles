import React, { useState } from 'react';
import Hero from '../components/HomeComponets/Hero/Hero';
import NewArrivels from '../components/HomeComponets/NewArrivels/NewArrivels';
import AboutOverView from '../components/HomeComponets/AvoutOverview/AboutOverView';
import Category from '../components/HomeComponets/Categories/Category';
import Grid from '../components/HomeComponets/Grid/Grid';
import ProductDisplay from '../components/HomeComponets/ProductDisplay/ProductDisplay';
import NewLetter from '../components/HomeComponets/NewsLetter/NewLetter';

const Home = () => {
  const [isActive, setIsActive] = useState("All");
  const [sizes, setSizes] = useState([]);

  return (
    <>
      <Hero />
      <NewArrivels />
      <Category isActive={isActive} setIsActive={setIsActive} sizes={sizes} setSizes={setSizes} />
      <ProductDisplay isActive={isActive} sizes={sizes} />
      <AboutOverView />
      <Grid />
      <NewLetter />
    </>
  );
};

export default Home;
