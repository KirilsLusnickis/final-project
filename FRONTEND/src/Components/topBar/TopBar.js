import './topBar.css';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            rter <i class="fa-duotone fa-clouds"></i>
          </Link>
        </div>
    </nav>
    </>
  )
}

export default TopBar