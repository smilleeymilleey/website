import React from 'react';
import '../App.css';
import { Button } from './Button';




function Skills() {
  return (
    <div className='hero-container'>
      <video src='/PexelsVideos1192113.mp4' autoPlay loop muted />
      <h1>These Are My Skills </h1>
      <p>I'm a Full Stack Web Developer</p>
      <div className='Abouthero-btns'>
        <Button
          className='Aboutbtns'
          buttonStyle='Aboutbtn--outline'
          buttonSize='Aboutbtn--large'
        >
          Check Out My Work!
        </Button>

        <div className="Skills">
          <h1>These are my skills</h1>
        </div>




      </div>
    </div>
  );
}

export default Skills;
