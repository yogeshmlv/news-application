import React from 'react'
import FetchData from '../FetchData/FetchData'
import Discover from './discover/Discover'
import DiscoverData from './discoverdata/DiscoverData'
// import Card from './hero/Card'
import Hero from './hero/Hero'
import Home from './mainContent/homes/Home'
const Homepages = () => {
  return (
    <>
      <FetchData/>
      <Hero />
      {/* <Card/> */}
      <Home />
      <DiscoverData />
    </>
  )
}

export default Homepages