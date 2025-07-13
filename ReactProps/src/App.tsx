import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';

function App() {
  const [capuccinoQty, setCapuccinoQty] = useState(0);
  const [matchaQty, setMatchaQty] = useState(0);
  const [chocolateQty, setChocolateQty] = useState(0);
  const [rockyRoadQty, setRockyRoadQty] = useState(0);

  const [cart, setCart] = useState([]); 

  const increaseQty = (product) => {
    if (product === 'capuccino') setCapuccinoQty(capuccinoQty + 1);
    if (product === 'matcha') setMatchaQty(matchaQty + 1);
    if (product === 'chocolate') setChocolateQty(chocolateQty + 1);
    if (product === 'rockyRoad') setRockyRoadQty(rockyRoadQty + 1);
  };

  const decreaseQty = (product) => {
    if (product === 'capuccino' && capuccinoQty > 0) setCapuccinoQty(capuccinoQty - 1);
    if (product === 'matcha' && matchaQty > 0) setMatchaQty(matchaQty - 1);
    if (product === 'chocolate' && chocolateQty > 0) setChocolateQty(chocolateQty - 1);
    if (product === 'rockyRoad' && rockyRoadQty > 0) setRockyRoadQty(rockyRoadQty - 1);
  };

  const addToCart = (product, quantity, price) => {
    const newItem = { product, quantity, total: quantity * price };
    setCart([...cart, newItem]); 
  };

  return (
    <div className="container">
      <ProductList
        title="Capuccino"
        imgURL="https://i.pinimg.com/736x/40/64/19/4064197377db3fc52f0b2c13af391e87.jpg"
        description="This is Capuccino"
        rating={3.8}
        quantity={capuccinoQty}
        price={5} 
        onIncrease={() => increaseQty('capuccino')}
        onDecrease={() => decreaseQty('capuccino')}
      />

      <ProductList
        title="Matcha"
        imgURL="https://i.pinimg.com/736x/7c/10/78/7c1078d4e23e24fdf8ae2555fe72eddc.jpg"
        description="This is Matcha"
        rating={4.8}
        quantity={matchaQty}
        price={6} 
        onIncrease={() => increaseQty('matcha')}
        onDecrease={() => decreaseQty('matcha')}
      />

      <ProductList
        title="Chocolate"
        imgURL="https://i.pinimg.com/736x/42/7d/7c/427d7c401321846d8751b48d0a801c22.jpg"
        description="This is Chocolate"
        rating={5.0}
        quantity={chocolateQty}
        price={4.5} 
        onIncrease={() => increaseQty('chocolate')}
        onDecrease={() => decreaseQty('chocolate')}
      />

      <ProductList
        title="Rocky Road"
        imgURL="https://i.pinimg.com/736x/d6/1a/f0/d61af04764020553f1865e3783aef090.jpg"
        description="This is Rocky Road"
        rating={10}
        quantity={rockyRoadQty}
        price={7} 
        onIncrease={() => increaseQty('rockyRoad')}
        onDecrease={() => decreaseQty('rockyRoad')}
      />

      {}
      <button className="add-to-cart-global" onClick={() => alert(`Items in cart: ${cart.map(item => `${item.quantity} x ${item.product}`).join(', ')}`)}>
        Add to Cart
      </button>
    </div>
  );
}

export default App;


