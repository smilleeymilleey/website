import React from 'react';
import '../App.css';
import './AboutHero.css';




function AboutHero() {
  return (
    <div className='hero-container'>
      <section>
        <img className="meinside" alt="me" src="meinside1.jpg"></img>
      </section>

        <h1 className="welcome"> About Me</h1>
            <h2 className="header">
              Welcome! My name is Caitlyn. This is my story.
            </h2>

        <section className="paragraph">
           I have been programming since 2019 and have worked on <br />
              social media clones, e-commerce projects, and developing with API's.<br />
                 I have a Full Stack Website Development Certificate from Southern Methodist University<br />
                  and a Bachelors of Science and Engineering from Texas A&M-Commerce. My passion for programming <br /> began when
                  I first learned that I could create something out of nothing.

        </section>








  </div>
  );
}

export default AboutHero;
