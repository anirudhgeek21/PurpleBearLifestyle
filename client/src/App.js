import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Wall from './components/Wall';
import Upload from './components/Upload';
import { CartProvider } from './components/CartContext';
import Newproduct from './components/addItem/Newproduct';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="App bg-white cursor-default">
              <Navigation />
              <div className="md:w-[100%] mx-auto mt-[108px]">
                <Routes>
                  <Route path="/" element={<Wall />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/newitem" element={<Newproduct />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
