import React from "react"
import "./music.css"
// import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
// import { popular } from "../../../dummyData"
const Music = ({item}) => {
 
  return (
    <>
      <section className='music'>
        <Heading title='Technology News' />
        <div className='content'>
          
            {item
              .map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val?.urlToImage} alt='' />
                        </div>
                        <div class='catgeory catgeory1'>
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val?.title?.slice(0, 40)}...</h1>
                        <div className='date'>
                          <i class='fas fa-calendar-days'></i>
                          <label>{val.publishedAt}</label>
                        </div>
                        <p className='desc'>{val?.description?.slice(0, 250)}...</p>
                        <div className='comment'>
                          <i class='fas fa-share'></i>
                          <label>Share / </label>
                          <i class='fas fa-comments'></i>
                          <label>{val.author}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
        
        </div>
      </section>
    </>
  )
}

export default Music