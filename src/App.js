import { useState,createContext } from 'react';
import SinglePages from './components/singlePages/SinglePages';
import './App.css';
import React from 'react'
import Header from './components/common/header/Header'
import Homepages from './components/home/Homepages';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from './components/common/footer/Footer';
import Culture from './components/culture/Culture';
import Politics from './components/politics/Politics';

 export const countryContext =createContext(null)

const App = () => {
  const [country, setCountry] = useState("in");
  const handleChangeCountry =(val)=>{
    setCountry(val)
    console.log(val);
  }
  return (
    <>
     <countryContext.Provider value={country}>
      < BrowserRouter>
      
      <Header  handleChangeCountry={handleChangeCountry}/>
      
        <Routes>
        <Route exact path='/' element={<Homepages/>} country={country}/>
        <Route exact path='/SinglePages/:id' element={<SinglePages/>}/>
        <Route exact path='/culture' element={<Culture/>}/>
        <Route exact path='/politics' element={<Politics/>}/>
        </Routes>
        <Footer/>
     
        </ BrowserRouter>
        </countryContext.Provider>
    </>
  )
}

export default App