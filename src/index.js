import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoginProvider } from './context/login-context';
import { CartProvider } from './context/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);

