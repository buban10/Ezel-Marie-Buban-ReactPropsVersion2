import React from 'react';

function ProductList(props) {
  const { title, imgURL, description, rating, quantity, price, onIncrease, onDecrease } = props;

  // Calculate the total price for the product
  const totalPrice = price * quantity;

  // Conditional class for the "-" button when quantity is 0
  const minusButtonClass = quantity === 0 ? 'disabled' : '';

  return (
    <div className="product-card">
      <h4>{title}</h4>
      <img src={imgURL} alt="Product Image"/>
      <p>{description}</p>
      <p>Rating: {rating}</p>

      {/* Quantity Control */}
      <div className="quantity-control">
        <button 
          onClick={onDecrease} 
          className={minusButtonClass}
          disabled={quantity === 0}  // Disable the "-" button when quantity is 0
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>

      {/* Total Price */}
      <div className="total">
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductList;
