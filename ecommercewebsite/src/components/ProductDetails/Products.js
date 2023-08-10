import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getProduct} from "../../actions/productAction";
import Loader from '../../layout/Loader/Loader';
import Product from '../Home/Product';
import './Products.css'
import MetaData from '../../layout/MetaData'
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
function Products() {
  const dispatch = useDispatch();
    const{loading, products}=useSelector(
        (state)=>state.products
        
    );
    const keyword = useParams().keyword;
   
    useEffect(()=>{
     dispatch(getProduct(keyword));
    },[dispatch,keyword]);
  
    
  return (
    <>
      {loading?<Loader/>:
      <>
     
      }
       <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
                <div className='paginationBox'>
                  <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange="Next"
                  firstPageText="1"
                  lastPageText="Last"
                  itemClass='page-item'
                  linkClass='page-link'
                  activeClass='pageLinkActive'
                  />
                </div>
         

      </>}
    </>
  )
}

export default Products
