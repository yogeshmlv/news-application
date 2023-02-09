import React from 'react'
import PopularData from '../popularData.jsx/PopularData'
import Ppost from '../ppost/Ppost'
import Life from '../life/Life'
import Music from '../musics/Music'
import Side from '../../sidecontent/side/Side'
import "./style.css"
import PpostData from '../ppostData/PpostData'
import LifeData from '../lifedata/LifeData'
const Home = () => {
  return (
    <>
    <main>
        <div className="container">
        <section className="mainContent">

            <PopularData/>
            <PpostData/>
            <LifeData/>
            <Music/>
        </section>
        <section className="sideContent">
        <Side/>
        </section>
        </div>
        </main>
    </>
  )
}

export default Home