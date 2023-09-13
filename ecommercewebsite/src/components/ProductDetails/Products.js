import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getProduct} from "../../actions/productAction";
import Loader from '../../layout/Loader/Loader';
import Product from '../Home/Product';
import './Products.css'
import MetaData from '../../layout/MetaData'
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import {Slider} from '@mui/material';
import  {Typography} from '@mui/material'
import Alert from '../../layout/Alert/Alert';
const catagories=[
  "Oversized",
  "Anime",
  "Shirts",
  "T-Shirts",
  "Jens"
]
function Products() {
  const dispatch = useDispatch();
  const [currentPage, setcurrentPage] = useState(1)
  const [price, setPrice] = useState([0,5000])
  const [Category, setCategory] = useState("")
  const [rating, setRating] = useState(0)
    const{loading, products,productsCount,error}=useSelector(
        (state)=>state.products
        
    );
    console.log("error",error)
    const resultPerPage =8;
    const keyword = useParams().keyword;
    const setcurrentPageNo =(e)=>{
      setcurrentPage(e)
    }
    const priceHandler =(e,newPrice)=>{
      setPrice(newPrice);
    }
    let limit=8;
    useEffect(()=>{
      
      if(error){
        
        <Alert message={error} type={error.message}/>
        
       
      }
     dispatch(getProduct(keyword,currentPage,limit,price,Category,rating));
    },[dispatch,keyword,currentPage,limit,price,Category,rating,error]);
  
    
  return (
    <div className='allproducts_section'>
      {loading?<Loader/>:
      <div className='allproducts'>
     
      
       <MetaData title="PRODUCTS -- ECOMMERCE" />
       
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
          <div className='filterBox'>
            <Typography>Price</Typography>
            <Slider value={price} onChange={priceHandler}valueLabelDisplay='auto'aria-labelledby='range-slider'
            min={0}max={10000}
            />
            <fieldset>
            <Typography>Rating</Typography>
            <Slider value={rating} onChange={(e,newRating)=>{setRating(newRating)}}valueLabelDisplay='auto'aria-labelledby='continuous-slider'
            min={0}max={5}
            />
            </fieldset>
            <Typography>Price</Typography>
            <ul className='categoryBox'>
              {catagories.map((category)=>(
                <li className='category-link'
                key={category}
                onClick={()=>setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          {resultPerPage<productsCount&&(
                <div className='paginationBox'>
                  <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setcurrentPageNo}
                  nextPageText="Next"
                  prevPageText="prev"
                  firstPageText='1st'
                  lastPageText="Last"
                  itemClass='page-item'
                  linkClass='page-link'
                  activeClass='pageItemActive'
                  activeLinkClass='pageLinkActive'
                  />
                </div>
                )}
         

      </div>}
    </div>
  )
}

export default Products
