import React/* , { useState, useEffect } */ from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiCoins } from 'react-icons/gi';

import { AiOutlineSearch } from 'react-icons/ai';
/* import { CgProfile } from 'react-icons/cg'; */
import { BsHandbag } from 'react-icons/bs';
import {
    Link
  } from "react-router-dom";
import UserOptions from './UserOptions';
  
function Navbarpage({isAuthenticated,user}) {
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
     <nav style={{ position:"fixed",width:"100vmax",zIndex:"30"}}> 
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="blue" variant="dark">
    <Container>
        <GiCoins style={{marginRight: "15px",height:'20px',width:'20px'}}/>
      <Navbar.Brand>BayRang</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li> 
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
         
          
        </Nav>
        <div className="form-check form-switch">
    {/*   <Button variant="outline-success">Search</Button>  */}
    <div className='iconfunc'>
    <Link className="nav-link" to="/search" style={{justifyContent:'center',display:'flex'}}><AiOutlineSearch style={{height:'2vmax',width:'5rem'}}/></Link>
    <Link className="nav-link" to="/card" style={{justifyContent:'center',display:'flex'}}><BsHandbag style={{height:'2vmax',width:'5rem'}}/></Link>
    <Link className="nav-link" to="/login" style={{justifyContent:'center',display:'flex'}}><UserOptions isAuthenticated={isAuthenticated}user={user} style={{height:'2vmax',width:'5rem'}}/></Link>
           
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
  )
}

export default Navbarpage;