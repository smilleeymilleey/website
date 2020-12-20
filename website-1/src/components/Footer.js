import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <aside className='footer-container'>
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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/sign-up'>My Story</Link>
            <Link to='/'>Letters Of Recomendation</Link>
            <Link to='/'>Resume</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>214-868-7223</Link>
            <Link to='/'>Cmiley@protonmail.com</Link>


          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Programming Videos</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link className="Instagram"
              class='social-icon-link instagram'
              to='//instagram.com/smilleeymilley/'
              target='_blank'
              aria-label='Instagram'
            > Instagram
            </Link>
            <Link className="Instagram"
              class='social-icon-link twitter'
              to='//twitter.com/smilleymilleey'
              target='_blank'
              aria-label='Twitter'
            >
              Twitter
            </Link>

            <Link className="Instagram"
              class='social-icon-link twitter'
              to='//linkedin.com/in/caitlyn-miley1/'
              target='_blank'
              aria-label='LinkedIn'
            >
              LinkedIn
            </Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Caitlyn Miley
              <i class='fas fa-globe-americas' />
            </Link>
          </div>
          <small class='website-rights'>Caitlyn Miley © 2020</small>
          <div class='social-icons'>


            <Link
              class='social-icon-link instagram'
              to='//instagram.com/smilleeymilley/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='//twitter.com/smilleymilleey'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
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
