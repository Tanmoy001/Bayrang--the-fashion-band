import React from 'react'
import  img from  './img_1.jpg'
import cardpic from './card.jpg'
import  './onearth.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Onearth() {
  const Tshirt =()=>{
window.location=('/men/tshirt')
  }
  return (
    <div className='onearth'> 
        <div className='poster_section'>
          <div className='poster_images'>
            <div  className='image'>
              <img src={img} />
            </div>
          </div>
        </div>
        <div className='card_section_first'>
            <div className='cardonearth'>
            <Card >
      <Card.Img variant="top" src={cardpic} />
    </Card>
            </div>
            <div className='cardonearth'>
            <Card >
      <Card.Img variant="top" src={cardpic} />
    </Card>
            </div>
            <div className='cardonearth'>
            <Card >
      <Card.Img variant="top" src={cardpic}  onClick={Tshirt}/>
    </Card>
    
            </div>
            <div className='cardonearth'>
            <Card >
      <Card.Img variant="top" src={cardpic} />
    </Card>
    
            </div>
        </div>


        <div className='card_section_second'>
            <div className='cardonearth'>
            <Card >
      <Card.Img variant="top" src={cardpic} />
    </Card>
            </div>
            <div className='cardonearth'>
            <Card >
      <Card.Img variant="top" src={cardpic} />
    </Card>
            </div>
            <div className='cardonearth'>
            <Card >
      <Card.Img variant="top" src={cardpic} />
    </Card>
    
            </div>

        </div>
      </div>
     
  )
}

export default Onearth
