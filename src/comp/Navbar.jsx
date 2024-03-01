import React from 'react';
import logo from '../images/logo1.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <a href='#' className='logo'>
        <img src={logo} alt='logo' />
        </a>

        <ul className='menu'>
            <li><Link to='/' className='active'>Home</Link></li>
            <li><Link to='/log'>Log</Link></li>
            <li><Link to='/seller'>Sell</Link></li>
            <li><Link to='/Buy'>Buy</Link></li>
            <li><Link to='/gov'>Government Login</Link></li>

        </ul>

        <Link className='property' to='/register' >user Login</Link>
        
        
    </nav>
  )
}

export default Navbar;