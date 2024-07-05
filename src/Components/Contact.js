import React from 'react'
import map from '../assets/map.PNG'
function Contact() {
  return (
    <div className='contactContainer'>
        <div className="aboutUpperBox">
            <h1>Let's Connect</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio praesentium, cum facere unde quaerat sapiente autem quidem ut quisquam nulla.</p>
        </div>
        <div className="contactLowerContainer">
            <div className="box">
                <div className="contactText">
                    <h5 className='bold'>Visit Our Office or Contact Us Today</h5>
                    <p>Address: Dablin Park, England, New york</p>
                    <p>Contact: abc@gmail.com</p>
                    <p>Number: 9856876543</p>
                </div>
                <img src={map} alt="image" />
            </div>
            <div className="form">
                <h5 className="bold">Connect with us. Fill Form</h5>
                <div className="inputs">
                <input type="text" placeholder='Enter Your First Name ' />
                <input type="text" placeholder='Enter Your Last Name ' />
                <input type="text" placeholder='Enter Your Email ' />
                <input type="text" placeholder='Enter Your Number' />
                <input type="text" placeholder='Enter Your Address' />
                <button>Submit</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Contact
