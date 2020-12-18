import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Flex } from './Flex';


function HeroSection() {
  return (
    <Flex
    container
    justifyContent="Space-between"
    width="300px"
    >
    <div className='hero-container'>
      <video src='record.mp4' autoPlay loop muted />
      <h1 className="TitleT">Hi, I'm Caitlyn Miley! </h1>
      <p className="SubT">Let's set the record straight.</p>
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
    </Flex>
  );
}

export default HeroSection;
