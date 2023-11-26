import React, { useState, useEffect } from 'react';
import './navigation.css';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      // Add a debounce or delay to toggle visibility
      if (Math.abs(currentScrollPos - prevScrollPos) > 10) {
        setPrevScrollPos(currentScrollPos);
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className='contentnav' style={{ display: isVisible ? 'block' : 'none' }}>
   
    <Nav variant="tabs" className="justify-content-center navbar"  defaultActiveKey="/home">
   
      {/* <Nav.Item>
        <Nav.Link href="/home">HOME</Nav.Link> 
      </Nav.Item> */}
      <Nav.Item>
        <div className='dropdown men'>
        <Nav.Link eventKey="link-1">MEN</Nav.Link>
        <div className="dropdown-content men_content">
        <a href="bayrang/men">Allin1</a>
    <a href="/products">Shirt</a>
    <a href="/products">t-Shirt</a>
    <a href="/products">Jens</a>
    <a href="/products">Trousers</a>
    <a href="/products">Footware</a>
  </div>
        
        </div>
      </Nav.Item>
      <Nav.Item>
        <div className='dropdown women'>
        <Nav.Link eventKey="link-2">WOMEN</Nav.Link>
        <div className="dropdown-content women_content">
    <a href="/products">women Shirt</a>
    <a href="/products">t-Shirt</a>
    <a href="/products">Jens</a>
    <a href="/products">Trousers</a>
    <a href="/products">Footware</a>
  </div>
        
        </div>
      </Nav.Item>

      <Nav.Item>
        <div className='dropdown kid'>
        <Nav.Link eventKey="link-3">KIDS</Nav.Link>
        <div className="dropdown-content kid_content">
    <a href="/products">Baby's Shirt</a>
    <a href="/products">Baby's t-Shirt</a>
    <a href="/products">Baby's Jens</a>
    <a href="/products">Baby's Trousers</a>
    <a href="/products">Baby's Footware</a>
  </div>
        
        </div>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link eventKey="link-4">ACCESORIES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">COLLECTION</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6">DESIGN</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Navigation
