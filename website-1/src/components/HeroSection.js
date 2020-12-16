import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='record.mp4' autoPlay loop muted />
      <h1 className="Title">Hi, I'm Caitlyn Miley! </h1>
      <p className="Sub">Let's set the record straight.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          view My Portfolio
        </Button>

      </div>
      <div>
    </div>


    </div>
  );
}

export default HeroSection;
