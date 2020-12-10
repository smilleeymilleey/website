import React from 'react';




function AboutCards() {
  return (
    <div className='Aboutcards'>
      <h1>About</h1>
      <div className='Aboutcards__container'>
        <div className='Aboutcards__wrapper'>
          <ul className='Aboutcards__items'>
            <AboutCards className="Resume"
              src='me.jfif'
              to="/services"
              text='Resume'
              path='/services'
            />
            <AboutCards
              src='instagram.png'
              text='Check Out My Blog'

              path='/blog'
            />
          </ul>
          <ul className='cards__items'>
            <AboutCards
              src='tclone.png'
              text='Twitter Clone'
              label='Mystery'
              path='/products'
            />
            <AboutCards
              src=''
              text='*Coming Soon*'
              label='Adventure'
              path='/products'
            />
            <AboutCards
              src='images/img-8.jpg'
              text='*Coming Soon*'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutCards;
