import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutHero.css';



function AboutHero() {
  return (

  <div class="content">
  <div class="aboutcard">
    <div class="firstinfo"><img src="https://randomuser.me/api/portraits/lego/6.jpg"/>
      <div class="profileinfo">
        <h1>Caitlyn Miley</h1>
        <h3>Web Devloper</h3>
        <p class="bio"> I am proficient in Javascript, React, HTML, CSS. I hold a Bachelors Of Science & Engineering and love bringing concepts to life through code!</p>
      </div>
    </div>
  </div>
 
</div>
   
  );
}

export default AboutHero;
