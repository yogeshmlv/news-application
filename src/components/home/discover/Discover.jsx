import React from 'react'
import Heading from '../../common/heading/Heading';
// import { discover } from '../../dummyData';
import "./discover.css";
const Discover = ({item}) => {
  return (
    <>
    <section className='discover'>
        <div className="container">
            <Heading title="Health News"/>
            <div className="content">
            {item.map((val)=>{
                return <div className="box">
                    <div className="img">
                        <img src={val?.urlToImage} alt="" />
                    </div>
                    <h1 className='title'>{val?.title?.slice(0, 15)}..</h1>
                </div>
            })}
        </div>
        </div>
    </section>
    </>
  )
}

export default Discover