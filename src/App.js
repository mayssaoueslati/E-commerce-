import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home';  
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collections from './components/collections';
import Product from './components/product';
import Account from './components/account';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/account" element={<Account/>} />
          
        </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;

