import React from 'react';

function ProductList(props) {
  const { title, imgURL, description, rating, quantity, price, onIncrease, onDecrease } = props;



  const totalPrice = price * quantity;


  const minusButtonClass = quantity === 0 ? 'disabled' : '';

  return (
    <div className="product-card">
      <h4>{title}</h4>
      <img src={imgURL} alt="Product Image"/>
      <p>{description}</p>
      <p>Rating: {rating}</p>

      {}
      <div className="quantity-control">
        <button 
          onClick={onDecrease} 
          className={minusButtonClass}
          disabled={quantity === 0}  
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>

      {}
      <div className="total">
        <p>Total: Ᵽ{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductList;
