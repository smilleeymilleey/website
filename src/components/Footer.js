import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <aside className="footer-container">
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure To Receive Updates On New Blog Posts!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
           
            <Link to='/'>Letter Of Recomendation</Link>
            <Link to='/'>Resume</Link>

          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>214-868-7223</Link>
            <Link to='/'>Cmiley@protonmail.com</Link>


          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Programming Videos</Link>

          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link className="Instagram"
              className='social-icon-link instagram'
              to='//instagram.com/smilleeymilley/'
              target='_blank'
              aria-label='Instagram'
            > Instagram
            </Link>
            <Link className="Instagram"
              className='social-icon-link twitter'
              to='//twitter.com/smilleymilleey'
              target='_blank'
              aria-label='Twitter'
            >
              Twitter
            </Link>

            <Link className="Instagram"
              className='social-icon-link twitter'
              to='//linkedin.com/in/caitlyn-miley1/'
              target='_blank'
              aria-label='LinkedIn'
            >
              LinkedIn
            </Link>

          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Caitlyn Miley
              <i className='fas fa-globe-americas' />
            </Link>
          </div>
          <small className='website-rights'>Caitlyn Miley © 2020</small>
          <div className='social-icons'>


            <Link
              className='social-icon-link instagram'
              to='//instagram.com/smilleeymilley/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='//twitter.com/smilleymilleey'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='//linkedin.com/in/caitlyn-miley1/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      </aside>
  
  );
}

export default Footer;
