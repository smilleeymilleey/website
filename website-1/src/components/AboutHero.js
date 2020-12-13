import React from 'react';
import '../App.css';
import './AboutHero.css';




function AboutHero() {
  return (
    <div className='hero-container'>
    <h1 className="welcome"> My Story</h1>

        <table className="table">
            <tr>
              <th>
                 My name is Caitlyn Miley and I am a Full Stack Developer!
              </th>
            </tr>
            <tr>
              <td>
                   I have been programming for the past year and have worked on <br />
                 social media clones, e-commerce projects, and developing with API's.<br />
                 I have a Full Stack Certificate from Southern Methodist University<br />
                 and a Bachelors of Science and Engineering from Texas A&M-Commerce.

             </td>
           </tr>
        </table>






    </div>
  );
}

export default AboutHero;
