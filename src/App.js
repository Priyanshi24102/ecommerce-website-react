import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Shopping from './Components/Shopping';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showHF,setshowHF]=useState(false);
  const isLoggedIn = window.localStorage.getItem('loggedin') === 'true';

  function showHeader(e){
    setshowHF(e);
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const initialQuantities = {};
        data.forEach((item) => {
          initialQuantities[item.id] = 0;
        });
        setQuantities(initialQuantities);
        setData(data);
      });
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedQuantities = { ...quantities, [itemId]: newQuantity };
    setQuantities(updatedQuantities);

    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <BrowserRouter>
      {isLoggedIn && <Header cartQuantity={cartQuantity} showHeader={showHeader} />}

        <Routes>
          {!isLoggedIn && (
            <>
              <Route path="/login" element={<LoginPage showHeader={showHeader}/>} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Main/>} />
    
            <Route path="/about" element={<About />} />
            <Route
              path="/shop"
              element={
                <Shopping
                  data={data}
                  addToCart={addToCart}
                  quantities={quantities}
                  updateQuantity={updateQuantity}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeItem={removeItem}
                  updateQuantity={updateQuantity}
                />
              }
            />
            <Route
              path="/product/:id"
              element={<ProductDetails addToCart={addToCart} />}
            />
          </Route>
        </Routes>
        {isLoggedIn && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
