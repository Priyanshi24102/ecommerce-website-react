import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ addToCart}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const navigate=useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="productDetailsContainer">
      <div className="productDetails">
        <img src={product.image} alt={product.title} />
        <div className="productText">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="bold">Price: ${product.price}</p>
          <p className="bold">Category: {product.category}</p>
          <button className="btn" onClick={() => navigate(`/shop`)}>Back</button>
          <button className="btn" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
