import React from 'react'
import axios from 'axios';
import { countryContext } from '../../../../App';
import Life from '../life/Life';
import { useState,useContext,useEffect } from 'react';
const LifeData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const country =useContext(countryContext)

    const fetchData1 = async () => {
        console.log(country);
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=sport&apiKey=954a08062c3140dcb6ac6f2574a7d5e5
            `);
            console.log(response);
            setData(response.data.articles);
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
    };
    //Use Effect
    useEffect(() => {
        fetchData1();
    }, [country]);


  return (
    <section className='hero'>
                            <Life item={data} />
        </section>
  )
}

export default LifeData