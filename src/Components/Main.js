import React from 'react';
import m3Image from '../assets/m3.png';

function Main() {
  return (
    <>
      <div className="mainContainer">
        <div className="mainTextContainer">
          <h2>Trends</h2>
         
            <h1 className="top fw-bolder ">
                Super Value Text
            </h1>
            <h1 > On All Products</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, amet.</p>
            <button>Explore</button>
        </div>
        <div className="mainImageContainer">
          <img src={m3Image} alt="M3" />
        </div>
      </div>
    </>
  );
}

export default Main;
