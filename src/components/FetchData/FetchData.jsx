import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Card from '../home/hero/Card';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=954a08062c3140dcb6ac6f2574a7d5e5");
      setData(response.data.articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log(data);
  return (
    <div className='container'>
      {data.map((val)=>{
        return(
          <Card item={val}/>
        )
        
      }
      )}
    </div>
  )
}

export default FetchData;
