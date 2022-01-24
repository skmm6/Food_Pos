import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fontello-3945db0e/css/fontello.css';
import App from './App';
import CartProvider from './context/CartProvider';



ReactDOM.render(
  <CartProvider>
    <div className=" bg-gray-700 h-screen">
      <App />
    </div>
  </CartProvider>,
  document.getElementById('root')
);

