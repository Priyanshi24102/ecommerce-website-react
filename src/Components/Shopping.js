import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../features/cartSlice";

function Shopping() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const cartItems = useSelector((state) => state.cartItems );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {   
          item.quantity =  1;
        });
        setData(data);
      });
  }, [cartItems]);

  const handleAddToCart = (item) => {
    const quantity = item.quantity ;
    dispatch(addToCart({ ...item, quantity }));
    const updatedData = data.map((dataItem) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, quantity };
      }
      return dataItem;
    });
    setData(updatedData);
    alert("Item Added to cart");
  };

  const incrementQuantity = (itemId) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setData(updatedData);
  };

  const decrementQuantity = (itemId) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setData(updatedData);
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
              style={{ cursor: "pointer" }}
            />
            <p className="bold">
              {item.title.length > 35
                ? `${item.title.slice(0, 35)}...`
                : item.title}
            </p>
            <p>{`${item.description.slice(0, 40)}....`}</p>
            <p className="bold">{`Price: $${item.price}`}</p>
            <div className="quantity">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="quantitybtn"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="quantitybtn"
              >
                +
              </button>
            </div>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
