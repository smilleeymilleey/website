import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutHero.css';
import { Flex } from './Flex';


function AboutHero() {
  return (
    <Flex
    container
    justifyContent="center"
    
    >
      <div className='abouthero-container'>
    
      <img className="aboutVideo" src='aboutmeheader.png'></img>
       
          <p className='aboutme-paragraph'> About Me. <br></br>
             I have been programming since 2019. I enjoy using Javascript, 
             React, Firebase, Node, HTML, and CSS.
          
          </p>
              <div className='aboutButtons'>
             <button className= "resume">Resume</button>
             <button className="portfolio">Portfolio</button>
             <button className="letter">Letter</button>
              </div> 
        

      
      <div>
   
</div>

    </div>
    </Flex>
  );
}

export default AboutHero;
