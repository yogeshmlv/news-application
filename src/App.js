
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
const App = () => {
  return (
    <>
      < BrowserRouter>
      <Header/>
        <Routes>
        <Route exact path='/' element={<Homepages/>}/>
        <Route exact path='/culture' element={<Culture/>}/>
        <Route exact path='/politics' element={<Politics/>}/>
        </Routes>
        <Footer/>
        </ BrowserRouter>
    </>
  )
}

export default App