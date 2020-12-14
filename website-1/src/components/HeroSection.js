import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import AboutHero from './AboutHero';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/firevideo.mp4' autoPlay loop muted />
      <h1>Hi, I'm Caitlyn Miley! </h1>
      <p>I'm a Full Stack Web Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Check Out My Work!
        </Button>

      </div>
      <div>
    </div>


    </div>
  );
}

export default HeroSection;
