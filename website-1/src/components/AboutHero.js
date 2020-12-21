import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutHero.css';
import { Flex } from './Flex';


function AboutHero() {
  return (

  <div class="content">
  <div class="aboutcard">
    <div class="firstinfo"><img src="https://randomuser.me/api/portraits/lego/6.jpg"/>
      <div class="profileinfo">
        <h1>Caitlyn Miley</h1>
        <h3>Web Devloper</h3>
        <p class="bio">I have been programming since 2019. I am proficient in Javascript, React, HTML, CSS</p>
      </div>
    </div>
  </div>
 
</div>
   
  );
}

export default AboutHero;
