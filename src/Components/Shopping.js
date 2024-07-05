import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Shopping({ addToCart }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="shopping">
      <h1>Exclusive Item's</h1>
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
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Shopping;
