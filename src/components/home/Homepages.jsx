import React from 'react'
import FetchData from '../FetchData/FetchData'
import DiscoverData from './discoverdata/DiscoverData'
import Hero from './hero/Hero'
import Home from './mainContent/homes/Home'
const Homepages = () => {
  return (
    <>
      <FetchData/>
      <Hero />
      <Home />
      <DiscoverData />
    </>
  )
}

export default Homepages