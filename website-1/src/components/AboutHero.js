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
      
             <button className= "resume">Resume</button>
     
        

      
      <div>
   
</div>

    </div>
    </Flex>
  );
}

export default AboutHero;
