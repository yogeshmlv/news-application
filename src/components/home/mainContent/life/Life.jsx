import React from 'react'
import "./life.css";
import Slider from "react-slick";
import Heading from '../../../common/heading/Heading';
import { lifestyle } from '../../../dummyData';
const Life = ({item}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // infinite: true,
                // dots: false,
              },
            },
          ]
      };
      
  return (
    <>
     <section className='popular'>
        <Heading title='Sports' />
        <div className='content'>
          <Slider {...settings}>
          {item.map((item) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img  className='hello' src={item?.urlToImage} alt='' />
                      </div>
                      <div class='catgeory catgeory1'>
                        <span>{item?.source?.name}</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{item.title.slice(0, 25)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{item?.publishedAt?.slice(0,10)}</label>
                      </div>
                      <div className='comment'>
                        <i class='fas fa-comments'></i>
                        <label>{item?.url}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
                })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Life