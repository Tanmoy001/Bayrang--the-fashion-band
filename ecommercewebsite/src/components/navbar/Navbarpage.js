import React, { useState, useEffect } from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiCoins } from 'react-icons/gi';

import { AiOutlineSearch } from 'react-icons/ai';
 import { CgProfile } from 'react-icons/cg'; 
import { BsHandbag } from 'react-icons/bs';
import bay from './bay.png'
import {
    Link,NavLink 
  } from "react-router-dom";
import UserOptions from './UserOptions';
  
function Navbarpage({isAuthenticated,user}) {
  const [scrolling, setScrolling] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
    // Add a scroll event listener when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
 /*  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);  */
  return (
    <div className='nav_header'>
     <nav className={`navbar Navbar_first ${scrolling ? 'scrolling' : ''}`} style={{ position:"fixed",width:"100vmax",zIndex:"30"}}> 
    <Navbar className='navbar Navbar_sec'  collapseOnSelect expand="lg" bg="blue" variant="dark">
    <Container>
      <img src={bay} alt=''style={{marginRight: "4px",height:'35px',width:'35px'}}/>
        {/* <GiCoins style={{marginRight: "15px",height:'20px',width:'20px'}}/> */}
      <Navbar.Brand>BayRang</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            
        <li className="nav-item"><NavLink className="nav-link" to="/" exact="true" activeclassname="active-link">
  Home
</NavLink></li>
        {/* <li className="nav-item"><NavLink className="nav-link" to="/products" activeclassname="active-link">
  Products
</NavLink></li> */}
         <li className="nav-item"><NavLink className="nav-link" to="/contact" activeclassname="active-link">
  Contact
</NavLink></li> 
        <li className="nav-item"><NavLink className="nav-link" to="/about" activeclassname="active-link">
  About
</NavLink></li>
         
          
        </Nav>
        <div className="form-check form-switch">
    {/*   <Button variant="outline-success">Search</Button>  */}
    <div className='iconfunc'>
    <Link className="nav-link" to="/search" style={{justifyContent:'center',display:'flex'}}><AiOutlineSearch style={{height:'35px',width:'1.5rem'}}/></Link>
    <Link className="nav-link" to="/card" style={{justifyContent:'center',display:'flex'}}><BsHandbag style={{height:'2vmax',width:'1.5rem'}}/></Link>
    {!isAuthenticated &&(
      <Link className="nav-link" to="/login" style={{justifyContent:'center',display:'flex'}}><CgProfile style={{height:'2vmax',width:'1.5rem'}}/></Link>
   )}
    {isAuthenticated &&(
    // <Link className="nav-link" to="/account" style={{justifyContent:'center',display:'flex'}}><UserOptions isAuthenticated={isAuthenticated}user={user} style={{height:'2vmax',width:'5rem'}}/></Link>
    <Link className="nav-link" to="/account" style={{justifyContent:'center',display:'flex'}}><img src={user.avatar.url } alt='profile' style={{height:'32px',width:'32px',borderRadius:'50%'}}/></Link>
  
   )}
                {/*   <a href='/card'style={{justifyContent:'center',display:'flex'}}><BsHandbag style={{height:'2vmax',width:'5rem'}}/></a>
                  <a href='/login'style={{justifyContent:'center',display:'flex'}}><CgProfile style={{height:'2vmax',width:'5rem'}}/></a> */}
                  </div>
</div>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>

    </Container>
  </Navbar>
   </nav> 
   </div>
  )
}

export default Navbarpage;