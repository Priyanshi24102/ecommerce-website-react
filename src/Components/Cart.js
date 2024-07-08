import React from 'react';

function Cart({ cart, removeItem, updateQuantity }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity === 0) {
      if (window.confirm('Do you want to remove this item from the cart?')) {
        removeItem(item.id);
      }
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cartContainer">
      {cart.map((item) => (
        <div className="cartItems" key={item.id}>
          <img src={item.image} alt="" />
          <p>{`Title: ${item.title.slice(0, 30)}...`}</p>
          <p>Price: ${item.price}</p>
          <div>
            <button
              onClick={() =>
                handleQuantityChange(item, item.quantity > 1 ? item.quantity - 1 : 0)
              }
            >
              -
            </button>
            <span style={{ padding: '5px' }}>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>
              +
            </button>
          </div>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className="totalPrice">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default Cart;
