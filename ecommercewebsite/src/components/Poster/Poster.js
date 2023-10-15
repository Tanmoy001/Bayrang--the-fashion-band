// import React from 'react';
// import './poster.css'; // Import your CSS file
// import pic from './beyrang_3.jpg'
// function Poster() {
//   return (
//     <div className="poster">
//       <div className="shop-now-button">
//         <button>Shop Now</button>
//       </div>
//       <img
//         src={pic}
//         alt="Poster"
//         className="poster-image"
//       />
//     </div>
//   );
// }

// export default Poster;

import { MdOutlineSort } from 'react-icons/md';
import React from 'react';
import './poster.css'; // Assuming you have a separate CSS file for styling
import pic from './beyrang_3.jpg'
function Poster() {
  return (
    <div className="poster-container">
      <div className="shop-now">
        <button className="shop-button"><MdOutlineSort/></button>
        <div className="vertical-text">Shop Now</div>
      </div>
      <img
        src={pic}
        alt="Poster"
        className="poster-image"
      />
       <div className="circular-button">
        <div className="circle">
          <span className="button-text">Shop</span>
          <div className="arrow down">	</div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
