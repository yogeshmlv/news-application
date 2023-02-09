import React from 'react'
import axios from 'axios';
import { useState, useEffect,useContext } from 'react';
import { countryContext } from '../../../../App'
import Ppost from '../ppost/Ppost'
const PpostData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const country =useContext(countryContext)

    const fetchData1 = async () => {
        console.log(country);
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=c81edd7bbab5412386d0a55cb38e42fa
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
   
                            <Ppost item={data} />
       
  )
}

export default PpostData;