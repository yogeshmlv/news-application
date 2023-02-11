import React from 'react'
import "./side.css";
import Heading from "../../../common/heading/Heading"
import SocialMedia from '../social/SocialMedia';
import { gallery } from '../../../dummyData';
import Slider from "react-slick";
import ScienceData from '../sciencedata/ScienceData';


const Side = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const category=["Business","Technology","Sports","Health","Science","Entertainment","General"]

  return (
    <>
    <Heading title="Stay Connected"/>
    <SocialMedia/>
    <Heading title="Subscribe"/>
    
    <section className="subscribe">
        <h1 className="title">Subscribe to our News Stories</h1>
        <form action="">
            <input type="text" placeholder='Email Address...' />
            <button>
                <i className='fa fa-paper-plane'></i>Submit
            </button>
        </form>
    </section>
<section className='banner'>
    <img src="./images/slidebar-banner.jpg" alt="" />
</section>

<ScienceData/>


<section className='categories'>
    <Heading title=' Categories'/>
    {category.map((val)=>{
        return <div className="catgeory catgeory1">
      <span>{val}</span>
        </div>
    })}
    
</section>

<section className='gallery'>
<Heading title=' Gallery'/>
<Slider {...settings}>

{gallery.map((val)=>{
        return (
            <div className="img">
                <img src={val.cover} alt="" />
            </div>
        )
     })}
     </Slider>
</section>
    </>
  )
}

export default Side