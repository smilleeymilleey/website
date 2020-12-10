import React from 'react';
import '../App.css';
import { Button } from './Button';




function AboutHero() {
  return (
    <div className='hero-container'>
      <video src='/PexelsVideos1192113.mp4' autoPlay loop muted />
      <h1>Testing New Component </h1>
      <p>I'm a Full Stack Web Developer</p>
      <div className='Abouthero-btns'>
        <Button
          className='Aboutbtns'
          buttonStyle='Aboutbtn--outline'
          buttonSize='Aboutbtn--large'
        >
          Check Out My Work!
        </Button>






      </div>
    </div>
  );
}

export default AboutHero;
