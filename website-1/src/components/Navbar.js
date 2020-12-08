import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closedMoileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Caitlyn Miley <i className='fas fa-globe-americas' />
          </Link>
          <div className="menu-Icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closedMoileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closedMoileMenu}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Projects' className='nav-links' onClick={closedMoileMenu}>
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closedMoileMenu}
                >
                Contact
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
          </div>
      </nav>

    </>
  );
}

export default Navbar;
