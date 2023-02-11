import React from 'react'
import { Link } from 'react-router-dom'
import FetchData from '../../FetchData/FetchData'
import "./hero.css"
const Card = ({ item  }) => {
  return (
    <>
      <div className="box">
        <div className="img">
            <img src={item?.urlToImage} alt="" />
        </div>
        <div className="text">
            <span className='catgeory'>{item?.source?.name}</span>


            { <Link to={`/SinglePages/:${item?.source?.author}`}>
            {/* {console.log(item?.source?.id)} */}
            <h1 className='title'>{item?.title?.slice(0, 45)}...</h1>
          </Link> }


            <div className="author flex">
                <span>{item.author}</span>
                <span>{item.publishedAt}</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card