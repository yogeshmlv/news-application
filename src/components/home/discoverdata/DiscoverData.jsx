import React from 'react'
import axios from 'axios';
import Discover from '../discover/Discover';
import { countryContext } from '../../../App';
import { useEffect,useState,useContext } from 'react';
const DiscoverData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
  const country =useContext(countryContext)
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=c81edd7bbab5412386d0a55cb38e42fa&page=1&pageSize=6`);
        setData(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    //Use Effect
    useEffect(() => {
      fetchData();
    }, [country]);

  return (
    <>
                            <Discover item={data} />
                            </>
  )
}

export default DiscoverData