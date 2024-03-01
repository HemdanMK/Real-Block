import React from 'react';
import Navbar from './Navbar';
function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <div className='intro'>
            <p>Looking for a Property !</p>
            <h1><span>Buy </span>and<span> Sell</span> Properties</h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae?<br/> by Hemdan</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header;