import React from "react";
import Slider from "react-slick";

import Heading from "../../../common/heading/Heading"

import "./ppost.css"

// copy same code of popular
const Ppost = ({item}) => {
  console.log(item);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='popularPost'>
        <Heading title='Popular Posts' />
        <div className='content'>
          <Slider {...settings}>
            {item.map((item) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img1'>
                        <img src={item?.urlToImage} alt='' />
                      </div>
                      <div class='catgeory catgeory1'>
                        <span>{item?.source?.name}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{item.title.slice(0, 25)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
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

export default Ppost
