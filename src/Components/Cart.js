
import React from 'react'

function Cart(props) {
    console.log("cart");
    console.log(props.cart);
  return (
    <div className='cartContainer'>
        {/* <h1>Cart</h1> */}
        {
            props.cart.map((item)=>
                <div className="cartItems">
                <img src={item.image} alt="" />
                <p>{`Title: ${item.title.slice(0,30)}...`}</p>
                <p>Price : ${item.price}</p>
                <button onClick={()=>props.removeItem(item.id)}>Remove</button>
            </div>
            )
        }
        
    </div>
  )
}

export default Cart
