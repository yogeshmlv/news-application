import React from 'react'
import Popular from '../popular/Popular'
import Ppost from '../ppost/Ppost'
import Life from '../life/Life'
import Music from '../musics/Music'
import Side from '../../sidecontent/side/Side'
import "./style.css"
const Home = () => {
  return (
    <>
    <main>
        <div className="container">
        <section className="mainContent">
            <Popular/>
            <Ppost/>
            <Life/>
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