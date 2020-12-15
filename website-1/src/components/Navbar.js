import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Caitlyn Miley
            <i className='fas fa-globe-americas' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                  </Link>
              </li>

                <li className='nav-item'>
                  <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                    About
                  </Link>
                </li>

                  <li className='nav-item'>
                    <Link
                      to='/products'
                      className='nav-links'
                      onClick={closeMobileMenu}
                      >
                      Projects
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      to='/Blog'
                      className='nav-links'
                      onClick={closeMobileMenu}
                      >
                      Blog
                    </Link>
                  </li>
                    <li>
                      <Link
                          to='/Contact'
                          className='nav-links-mobile'
                          onClick={closeMobileMenu}
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
