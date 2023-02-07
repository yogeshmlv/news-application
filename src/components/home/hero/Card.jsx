import React from 'react'
const Card = ({ item  }) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={item?.urlToImage} alt="" />
        </div>
        <div className="text">
          <span className='catgeory'>{item?.source?.name}</span>
          <h1 className='titleBg'>{item.title}</h1>
          <div className="author flex">
            <span>By{item.author}</span>
            <span>{item.publishedAt}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card