import React from "react"
import "./popular.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Heading from "../../../common/heading/Heading"
const Popular = ({ item}) => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  }
  return (
    <>
      <section className='popular'>
        <Heading title='Business' />
        <div className='content'>
          <Slider {...settings}>
          {item.map((item) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={item?.urlToImage} alt='' />
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

export default Popular
