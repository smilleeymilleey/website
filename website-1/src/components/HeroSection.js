import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/PexelsVideos1192113.mp4' autoPlay loop muted />
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
    </div>
  );
}

export default HeroSection;
