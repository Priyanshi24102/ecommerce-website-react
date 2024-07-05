import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Shopping from './Components/Shopping';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import { useState } from 'react';

function App() {
  let [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("Added to cart");
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shopping addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/cart" element={<Cart cart={cart} removeItem={removeFromCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
