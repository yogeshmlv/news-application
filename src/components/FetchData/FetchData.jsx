import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Card from '../home/hero/Card';
import { countryContext } from '../../App';
const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

const country =useContext(countryContext)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c81edd7bbab5412386d0a55cb38e42fa`);
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

  console.log(data);
  return (
    <section className='hero'>
      <div className='container'>
        {data.map((val, index) => {
          if (index % 6 === 0) {
            return (
              <Card item={val} />
            )
          }
        }
        )}
      </div>
    </section>
  )
}

export default FetchData;
