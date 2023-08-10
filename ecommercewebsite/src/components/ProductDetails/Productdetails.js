import React,{useEffect} from 'react'

import{useSelector,useDispatch} from "react-redux"
import { clearErrors, getProductDetails } from '../../actions/productAction';
import Carousel from "react-material-ui-carousel"
import MetaData from '../../layout/MetaData'
import { useParams } from 'react-router-dom';
import './productdetails.css'
import ReactStars from 'react-rating-stars-component'
import ReviewCard from './ReviewCard'
import Alert from '../../layout/Alert/Alert';
import Loader from '../../layout/Loader/Loader' 
const Productdetails = () => {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const{ product,loading,error}=useSelector(
        (state)=>state.productDetails
        
    );
   
    useEffect(()=>{
     
      if(error){
        Alert(error.type,error.message)
        dispatch(clearErrors())
      }
        dispatch(getProductDetails(id));
      
    },[dispatch,id,error]);
    const options = {
      edit:false,
      color:"rgba(20,20,20,0.1)",
      activeColor:"tomato",
      size:window.innerWidth<600?20:25,
      value:product.rating,
      isHalf:true
      };
  return (
    <>
    {loading?(<Loader/>):(
      <>
       <MetaData title={`${product.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button >-</button>
                     <input readOnly type="number" value="1" /> 
                    <button >+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
/*                     onClick={addToCartHandler}
 */                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button /* onClick={submitReviewToggle}  */className="submitReview">
                Submit Review
              </button>
            </div>
          

          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>
<div className='reviews'>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
          </div>
          </>
          )}
              
    </>
  )
}

export default Productdetails
