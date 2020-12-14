import React from 'react';
import '../App.css';
import './AboutHero.css';




function AboutHero() {
  return (
    <div className='hero-container'>
      <section>
        <img className="meinside" src="meinside.jpg"></img>
      </section>

        <h1 className="welcome"> About Me</h1>
            <h2 className="header">
               My name is Caitlyn Miley and I am a Full Stack Developer!
            </h2>

        <section className="paragraph">
           I have been programming for the past year and have worked on <br />
              social media clones, e-commerce projects, and developing with API's.<br />
                 I have a Full Stack Certificate from Southern Methodist University<br />
                  and a Bachelors of Science and Engineering from Texas A&M-Commerce.

        </section>








  </div>
  );
}

export default AboutHero;
