import React from 'react';
const Quantity = ({ quantity, setQuantity }) => {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantity">
      <button onClick={incrementQuantity}  className='quantitybtn' >+</button>
      <span>{quantity}</span>
      <button onClick={decrementQuantity} className='quantitybtn'>-</button>
    </div>
  );
};
export default Quantity;
