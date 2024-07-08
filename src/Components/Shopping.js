import React from 'react';
import { useNavigate } from 'react-router-dom';
import Quantity from './Quantity';

function Shopping({ data, addToCart, quantities, updateQuantity }) {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: quantities[item.id] });
  };

  return (
    <div className="shopping">
      <h1>Exclusive Items</h1>
      <div className="shoppingContainer">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt="image"
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ cursor: 'pointer' }}
            />
            <p className="bold">
              {item.title.length > 35
                ? `${item.title.slice(0, 35)}...`
                : item.title}
            </p>
            <p>{`${item.description.slice(0, 40)}....`}</p>
            <p className="bold">{`Price: $${item.price}`}</p>
            <Quantity
              quantity={quantities[item.id]}
              setQuantity={(newQuantity) =>
                updateQuantity(item.id, newQuantity)
              }
            />
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
