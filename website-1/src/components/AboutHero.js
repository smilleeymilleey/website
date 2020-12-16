import React from 'react';
import '../App.css';
import './AboutHero.css';





export default function Blog() {
  return (

    <div className='hero-container'>
        <h1 className="title">About Me</h1>

      <div class="wrapper">



        <div class="Picture">
        <img alt="me" className="meinside" src="meinside1.jpg"></img>
        </div>

        <div class="Paragraph">
        <h2> This is my story </h2>
        <p className="Paragraph">I have been programming since 2019 and have worked on <br />
            social media clones, e-commerce projects, and developing with API's.<br />
               I have a Full Stack Website Development Certificate from Southern Methodist University<br />
                and a Bachelors of Science and Engineering from Texas A&M-Commerce. My passion for programming <br /> began when
                I first learned that I could create something out of nothing.
                </p>
        </div>

      </div>
      </div>
)
}
