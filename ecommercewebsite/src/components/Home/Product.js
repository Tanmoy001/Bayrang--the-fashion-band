import React from 'react'
import{Link}from "react-router-dom"
import ReactStars from "react-rating-stars-component"
const Product = ({product}) => {
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth<600?20:25,
        value:product.rating,
        isHalf:true
    }
  return (
<Link target={'_blank'} className='productCard'to={`product/${product._id}`}>
    <img src={product.images[0].url} alt='show'/>
    <p>{product.name}</p>
    <div>
        <ReactStars {...options}/>
        </div>
        <span className='reviews'>{product.numOfReviews}Reivews</span>
    
    <span>{product.price}</span>

</Link>
  )
}
export default Product
