import React from "react";
import Slider from "react-slick";
// import "../popular/popular.css"
import Heading from "../../../common/heading/Heading"
import "./ppost.css"
// copy same code of popular
const Ppost = ({item}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='popularPost'>
        <Heading title='Entertainment' />
        <div className='content'>
          <Slider {...settings}>
          {item.map((item) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img className="ppImage" src={item?.urlToImage} alt='' />
                      </div>
                      <div class='catgeory catgeory1'>
                        <span>{item?.source?.name}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{item.title}</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label htmlFor="">{new Date(item?.publishedAt).toGMTString()
}</label>
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
