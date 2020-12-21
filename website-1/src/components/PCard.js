import React from 'react';
import './PCard.css';

function PCard() {
    return (
<div className="Cardcontainer">
<section className="info">
  
  <h1>Github Profile: <a href="https://github.com/smilleeymilleey" target="_blank">SmilleeyMilleey</a></h1>
</section>
<section className="cards-wrapper">
  <div className="card-grid-space">
   
    <a className="pCard" href="https://codetheweb.blog/2017/10/06/html-syntax/">
      <div>
        <h1>Twitter Clone</h1>
        <p>Tweet, View @smilleeymilleys Tweets in Real Time, and share posts!</p>
        <div className="date">6 Oct 2020</div>
        <div className="tags">
          <div className="tag">Firebase</div>
          <div className="tag">Javascript</div>
          <div className="tag">React</div>
        
        </div>
      </div>
    </a>
  </div>
  <div className="card-grid-space">
    
    <a className="pCard" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"> 
      <div>
        <h1>Basic types of HTML tags</h1>
        <p>Learn about some of the most common HTML tags…</p>
        <div className="date">9 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div className="card-grid-space">
    
    <a className="pCard" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"> 
      <div>
        <h1>Links, images and about file paths</h1>
        <p>Learn how to use links and images along with file paths…</p>
        <div className="date">14 Oct 2017</div>
        <div className="tags">
          <div className="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  </section>
  </div>





    );
    
}

export default PCard;