import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import pic from'./error.jpg'
import'./notfound.css'
function NotFound() {


return (
    <div className='not_found'>
      <div className='image_container'>
        <img src={pic} alt='error_img'/>
      </div>
    <div className="not-found-container">
      <h1>PAGE NOT FOUND </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div className='back_home'>
      <Link to="/" className="home-link">
        < AiFillHome />
        <span>Go to Home</span>
      </Link>
      </div>
    </div>
    </div>
  );
}
export default NotFound

