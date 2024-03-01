import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Web3 from 'web3'; // Assuming you have a web3 library installed

import Home from '../src/comp/Home';
import Header from './comp/Header';
import Howitworks from './comp/Howitworks';
import About from './comp/About';
import Agent from './comp/Agent';
import Signup from '../src/comp/Signup';
import Seller from '../src/comp/seller';
import Buyer from '../src/comp/BuyerPage'

function App() {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    // Initialize web3 when the component mounts
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        // Modern DApp browsers
        const ethereum = window.ethereum;
        try {
          // Request account access if needed
          await ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(ethereum);
          setWeb3(web3Instance);
        } catch (error) {
          console.error('Error connecting to Ethereum:', error);
        }
      } else if (window.web3) {
        // Legacy DApp browsers
        const web3Instance = new Web3(window.web3.currentProvider);
        setWeb3(web3Instance);
      } else {
        console.error('No Ethereum provider detected');
      }
    };

    initializeWeb3();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home web3={web3} />} />
        <Route path='header' element={<Header web3={web3} />} />
        <Route path='howitworks' element={<Howitworks web3={web3} />} />
        <Route path='about' element={<About web3={web3} />} />
        <Route path='agent' element={<Agent web3={web3} />} />
        <Route path='register' element={<Signup web3={web3} />} />
        <Route path='seller' element={<Seller web3={web3} />} />
        <Route path='Buy' element={<Buyer web3={web3} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
