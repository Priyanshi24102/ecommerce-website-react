import React from 'react'
import lap from '../assets/lap.png'
function About() {
  return (
    <div className='aboutContainer'>
        <div className="aboutUpperBox">
            <h1>#Know Us...</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae. Quae unde reprehenderit vero autem!</p>
        </div>
        <div className="aboutLowerBox">
            <div className="about">
                <img src={lap} alt="" />
                <div className="aboutText">
                    <h1>Who we are ?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing Dolorum corrupti consequuntur sunt ipsam aperiam vel magni sequi eos sit amet consectetur adipisicing Dolorum corrupti consequuntur sunt ipsam aperiam vel magni sequi eos atque nam maxime dolorem fuga, rem eum iure quidem! Illo corporis, asperiores ipsum excepturi voluptates necessitatibus consectetur odit omnis hic praesentium autem, officiis dignissimos assumenda saepe</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
