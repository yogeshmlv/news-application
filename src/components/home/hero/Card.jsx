import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ item  }) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={item?.urlToImage} alt="" />
        </div>
        <div className="text">
          <span className='catgeory catgeory1'>{item?.source?.name}</span>
          <Link to={`/SinglePages/:${item?.source?.id}`}>
            {console.log(item?.source?.id)}
            <h1 className='title'>{item?.title?.slice(0, 45)}...</h1>
          </Link>
          <div className="author flex">
            <span>{item.author?.slice(0,10)}</span>
            <span>{item.publishedAt?.slice(0,10)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card