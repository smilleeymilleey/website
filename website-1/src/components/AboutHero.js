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
              Welcome! Read about My Story here.
            </h2>

        <section className="paragraph">
           I have been programming since 2019 and have worked on <br />
              social media clones, e-commerce projects, and developing with API's.
                 I have a Full Stack Website Development Certificate from Southern Methodist University
                  and a Bachelors of Science and Engineering from Texas A&M-Commerce. My passion for programming began when
                  I first learned that I could create something out of nothing.

        </section>








  </div>
  );
}

export default AboutHero;
