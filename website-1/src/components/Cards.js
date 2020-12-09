import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              to="/services"
              text='My Story'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Check Out My Blog'
              to="/blog"
              path='/blog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Twitter Clone'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='*Coming Soon*'

              label='Adventure'
              path='/products'
            />
            <CardItem
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

export default Cards;
