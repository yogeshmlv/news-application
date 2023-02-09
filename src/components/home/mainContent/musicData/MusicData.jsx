import React from 'react'
import Music from '../musics/Music';
import axios from 'axios';
import { countryContext } from '../../../../App';
import { useState,useContext,useEffect } from 'react';

const MusicData = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

const country =useContext(countryContext)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=c81edd7bbab5412386d0a55cb38e42fa&page=1&pageSize=4`);
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
                            <Music item={data} />
                            </>
  )
}

export default MusicData