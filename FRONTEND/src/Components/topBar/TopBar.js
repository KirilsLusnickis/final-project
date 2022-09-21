import './topBar.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

const TopBar = () => {
  const [click, setClick] = useState(false);

  const manualClick = () => setClick(!click);
  
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            rter <i class="fa-solid fa-cloud"/>
          </Link>
          <div className='menu-icon' onClick={manualClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
        </div>
    </nav>
    </>
  )
}

export default TopBar