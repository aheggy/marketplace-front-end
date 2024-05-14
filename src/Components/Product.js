import "./Product.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    setQuantity(quantity + 1);
    console.log(`Added ${quantity} ${product.product_name} to cart`);
  };

  return (
    <div className="product">
      <p className="label">
        <span className="bold centered-type">
          {product.product_type.toUpperCase()}
        </span>
      </p>
      <Link to={`/products/${product.id}`}>
        <img src={product.url} alt={product.product_name} />
      </Link>
      <span className="bold">{product.product_name}</span>
      <p className="label">
        <span className="bold">Price: </span>${product.price}
      </p>
      <p className="label">
        <span className="bold">Favorite:</span>{" "}
        {product.is_favorite ? <span>⭐</span> : <span>✩</span>}
      </p>
      <div className="product-details">
        <div className="quantity-box">
          <button
            className="quantity-button"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </button>
          <input
            className="quantity-input"
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
            min="1"
          />

          <button
            className="quantity-button"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>
        <button onClick={addToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}