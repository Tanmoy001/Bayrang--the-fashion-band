import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor ligula, vel ultrices tortor varius sed.</p>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main St</li>
              <li>Anytown, USA</li>
              <li>email@example.com</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Shipping & Returns</h4>
            <ul className="list-unstyled">
              <li>Free Shipping on Orders Over $50</li>
              <li>Easy Returns</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Connect with Us</h4>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com"><FaFacebook />Facebook</a></li>
              <li><a href="https://www.twitter.com"><FaTwitter />Twitter</a></li>
              <li><a href="https://www.instagram.com"><FaInstagram />Instagram</a></li>
            </ul>
          </div>
        </div>
      
      <div className='lastcontent'>
      <div className='popularserches'>
        <p>Popular searches</p>
        
        <h6> <a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;
        <a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;
        0<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;<a href='/products'>Women's T-Shirts</a>&nbsp;|&nbsp;
        </h6>
      </div>
      <div className='copyright'>
        <p> © बेrang Official Website</p>
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;