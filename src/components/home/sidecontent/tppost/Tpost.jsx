import React from "react"
import Heading from "../../../common/heading/Heading"
import "./tpost.css"

const Tpost = ({item}) => {
  return (
    <>
      <section className='tpost'>
        <Heading title='Science News'/>
        {item.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.urlToImage} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 30)}...</h1>
                <span>A Days Ago</span>
              </div>
             
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Tpost