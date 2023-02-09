import React from 'react'
import "./life.css";
import Slider from "react-slick";
import Heading from '../../../common/heading/Heading';

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
      <section className='popularPost life'>
                <Heading title='Sports' />
                <div className="content">
                <Slider {...settings}>
                {item.map((item) => {
                    return (
                        
                            <div className="box shadow">
                                <div className="images"><div className="img">
                                    <img className='hello' src={item?.urlToImage} alt="" />
                                </div>
                                <div className="catgeory catgeory1">
                                    <span>{item?.source?.name}</span>
                                </div>
                                </div>
                                <div className="text row">
                                    <h1 className='title'>{item.title.slice(0, 45)}...</h1>
                                    <div className="date">
                                    <i class="fa-solid fa-calendar-days"></i>
                                        <label htmlFor="">{new Date(item?.publishedAt).toGMTString()
}</label>
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