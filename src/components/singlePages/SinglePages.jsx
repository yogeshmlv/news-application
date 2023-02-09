import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SinglePagesSlider from './singlePageSlider/SinglePagesSlider';
import "./singlepage.css";
const SinglePages = () => {
    // const { id } = useParams(null);
    // const [item, setItem] = useState([]);

    // useEffect(() => {
    //   const item =item.articles.find((item)=>item.id===parseInt(id))
    // //   window.screenTop(0,0)
    //   if(item){
    //     setItem(item)
    //   }
    // }, [id])
    

    return (
        <>
            {/* {item ? (
                <main>
                    <SinglePagesSlider/>
                    <div className="container">
                    <section className='mainContent details'>
                        <h1 className='title'>Hello</h1>
                        {console.log(item)}
                    </section>
                    </div>
                </main>
            ) : (
             <h1>Not Found</h1>
             )} */}
             <h1>Palm.hr is configurable across borders, making it easy for it to match local labor laws, and employee regulations in different markets.</h1>
        </>
       
    )
}

export default SinglePages