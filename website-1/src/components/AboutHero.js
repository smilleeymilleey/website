import React from 'react';
import '../App.css';
import './AboutHero.css';




function AboutHero() {
  return (
    <div className='hero-container'>
    <h1 className="welcome"> My Story</h1>
      <h2 className="intro"> My name is Caitlyn Miley and I am a Full Stack Web Developer!</h2>
        <table className="table">
          <tr>
            <th>I have been programming for the past year and have worked on:
            </th>
          </tr>
        </table>
            <ul className="list">
              <li>E-commerce</li>
              <li>Social Media</li>
            </ul>




        <img className="aboutMePic" src="/meinside.jpg"></img>

    </div>
  );
}

export default AboutHero;
