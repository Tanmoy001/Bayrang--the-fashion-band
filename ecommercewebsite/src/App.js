import React,{useEffect} from 'react'
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader"
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Productdetails from './components/ProductDetails/Productdetails';

import Products from './components/ProductDetails/Products';
/* import Alert from './layout/Alert/Alert'; */
import Search from './layout/Search/Search';
import Navbarpage from './components/navbar/Navbarpage';
import LoginsignUp from './components/User/Login/LoginsignUp';
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
  
   <Navbarpage/>
   <Routes>
     <Route path="/" element={<Home />}/> 
     <Route exact path="/product/:id" element={<Productdetails />}/>
     <Route exact path="/products/:keyword" element={<Products />}/>
     
     <Route exact path="/products/product/:id" element={<Productdetails />}/>
     <Route exact path="/products" element={<Products />}/>
     {/* <Route exact path="/alert" element={ <Alert type="success" message="Success message!" />}/> */}
     <Route exact path="/search" element={ <Search/>}/>
     <Route exact path="/login" element={ <LoginsignUp/>}/>
  
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
