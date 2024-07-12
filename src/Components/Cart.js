import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems || []);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  return (
    <div className="cartContainer">
      {cartItems.map((item) => (
        <div className="cartItems" key={item.id}>
          <img src={item.image} alt="" />
          <p>{`Title: ${item.title.slice(0, 30)}...`}</p>
          <p>Price: ${item.price * item.quantity}</p>
          <div className="quantity">
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              {" "}
              -{" "}
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="totalPrice">
        <p>Total Price: ${Math.floor(totalPrice)}</p>
      </div>
    </div>
  );
}

export default Cart;
