import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Shopping from "./Components/Shopping";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import LoginPage from "./Components/LoginPage";
import Register from "./Components/Register";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [showHF, setshowHF] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedin") === "true";
  function showHeader(e) {
    setshowHF(e);
  }
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <Header showHeader={showHeader} />}

        <Routes>
          {!isLoggedIn && (
            <>
              <Route
                path="/login"
                element={<LoginPage showHeader={showHeader} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shopping />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
        {isLoggedIn && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
