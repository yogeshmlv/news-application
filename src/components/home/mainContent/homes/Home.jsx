import React from 'react'
import PopularData from '../popularData.jsx/PopularData'
import Side from '../../sidecontent/side/Side'
import "./style.css"
import PpostData from '../ppostData/PpostData'
import LifeData from '../lifedata/LifeData'
import MusicData from '../musicData/MusicData'
const Home = () => {
  return (
    <>
    <main>
        <div className="container">
        <section className="mainContent">

            <PopularData/>
            <PpostData/>
            <LifeData/>
            <MusicData/>
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