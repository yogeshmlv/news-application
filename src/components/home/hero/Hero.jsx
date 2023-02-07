import React, { useState } from 'react'
import FetchData from '../../FetchData/FetchData'
import Card from './Card'
import "./hero.css"
const Hero = () => {
  const [items, setItems] = useState([FetchData]);
  return (
    <>
      <section className='hero'>
        <div className="container">
          {items.map((item) => {
            return <Card key={item} item={item} />
          })}
        </div>
      </section>
    </>
  )
}

export default Hero