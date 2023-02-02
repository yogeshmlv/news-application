import React from 'react'

const Card = ({item:{id,cover,catgeory,title,authorName,authorImg,time,desc}}) => {
  return (
    <>
    <div className="box">
        <div className="img">
            <img src={cover} alt="" />
        </div>
        <div className="text">
            <span className='catgeory'>{catgeory}</span>
            <h1 className='titleBg'>{title}</h1>
            <div className="author flex">
                <span>By{authorName}</span>
                <span>{time}</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card