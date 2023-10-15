import React from 'react'
import'./home.css'
import {CgMouse} from "react-icons/cg"
import Product from './Product.js'
import MetaData from '../../layout/MetaData'
import {getProducthome} from "../../actions/productAction"
import{useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import Loader from '../../layout/Loader/Loader'

import Menonearth from './menonearth/Menonearth'
import Merchandise from '../../contextapi/merchandise/Merchandise'
import Womenonearth from './womenonearth/Womenonearth'
import Slider from '../../contextapi/slider/Slider'
import Topcollectionhome from './TopCollection/Topcollectionhome'
import Spectacles from './spectacles/Spectacles'
import Specialeditionhome from './Specialaedition/Specialeditionhome'
/* const product={
    name:"tshirt",
    price:1200,
    _id:"tadfaf",
    rating:2.5
} */

function Home() {
    const dispatch = useDispatch();
    const{loading, products}=useSelector(
        (state)=>state.products
        
    );
   let limit = 10;
    useEffect(()=>{
        dispatch(getProducthome(limit));
    },[dispatch,limit]);
    
    
    return (
        <>
        {loading?(<Loader/>):(
            <>
             <Slider/>
            <Topcollectionhome/>
            <Specialeditionhome/>
            <Merchandise/>
            <Menonearth/>
            <Womenonearth/>
            
            <Spectacles/>
        <MetaData title="Bayrang-Home"/>
        <div className='banner'>
            <p>Welcome to the Bayrang</p>
            <h1>Find Amazing products below</h1>
            <a href='#container'>
                <button>
                    Scroll<CgMouse/>
                </button>
            </a>
            
        </div>

        <div className='container_product' id='container'>
            
        <h2 className='homeHeading'>Featured Product</h2>
        <div className='container'>
   
            
            {products && products.map((product)=>
                <Product product={product}/>
                
            )} 
        </div>
        </div>
        </>
        )}
        </>
    )
}

 export default Home
