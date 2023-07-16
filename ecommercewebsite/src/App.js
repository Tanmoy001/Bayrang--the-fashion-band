import React,{useEffect} from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader"
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Loader from './layout/Loader/Loader';

function App() {
  useEffect(() => {
      WebFont.load({
    google: {
      families: ['Droid Sans', 'Droid Serif']
    },
  });
  }, [])
  return (
    <>
    <BrowserRouter>
   
    <Navbar/>
   <Routes>
     <Route path="/" element={<Home />}/> 
    
    
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
