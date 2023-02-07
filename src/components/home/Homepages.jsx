import React from 'react'
import FetchData from '../FetchData/FetchData'
import Discover from './discover/Discover'
import Hero from './hero/Hero'
import Home from './mainContent/homes/Home'
const Homepages = () => {
  return (
    <>
      <FetchData />
      <Hero />
      <Home />
      <Discover />
    </>
  )
}

export default Homepages