import React from 'react'
import'./home.css'
import {CgMouse} from "react-icons/cg"
import Product from './Product.js'
import MetaData from '../../layout/MetaData'
import {getProduct} from "../../actions/productAction"
import{useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import Loader from '../../layout/Loader/Loader'
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
   
    useEffect(()=>{
        dispatch(getProduct());
    },[dispatch]);
    
    
    return (
        <>
        {loading?(<Loader/>):(
            <>
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
