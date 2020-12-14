import React from 'react';
import './Qualifications.css';


function Qualifications () {
  return (
    <div className="hero-container">
      <h1 className='welcomeQualify'>Qualifications</h1>

        <div class="row">
          <div class="column">
              <img className="letter" src="letterofrec.png" alt="letter"></img>
              <div className="overlay">
                <div className="text">Letter Of Recomendation</div>
                </div>
          </div>


            <div className="column">
              <img className="resume" src="resume1.png" alt="resume"></img>
              <div className="overlay">
                <div className="text">Resume</div>
                </div>

            </div>
                <div className="column">
                  <img className="coverletter" src="coverletter1.png" alt="coverletter"></img>
                  <div className="overlay">
                    <div className="text">Cover Letter</div>
                    </div>
                </div>

</div>
</div>




  );
};

export default Qualifications;
