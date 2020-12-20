import React from 'react';
import './ProjCard.css';

function ProjCard() {
    return (

<div className="grid">
  <div className="grid__item">
    <div className="card"><img className="card__img" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="Snowy Mountains">
      <div className="card__content">
        <h1 className="card__header">A starry night</h1>
        <p className="card__text">Look up at the night sky, and find yourself <strong>immersed</strong> in the amazing mountain range of Aspen. </p>
        <button className="card__btn">Explore <span>&rarr;</span></button>
      </div>
    </div>
  </div>
  <div classNameName="grid__item">
    <div classNameName="card"><img classNameName="card__img" src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="Desert">
      <div classNameName="card__content">
        <h1 classNameName="card__header">Misty mornings</h1>
        <p classNameName="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
        <button classNameName="card__btn">Explore <span>&rarr;</span></button>
      </div>
    </div>
  </div>
  <div classNameName="grid__item">
    <div classNameName="card"><img classNameName="card__img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" alt="Canyons">
      <div classNameName="card__content">
        <h1 classNameName="card__header">Utah sunsets</h1>
        <p classNameName="card__text">Sunsets over the <strong>stunning</strong> Utah Canyonlands, is truly something much more than incredible.</p>
        <button classNameName="card__btn">Explore <span>&rarr;</span></button>
      </div>
    </div>
  </div>
</div>
    )
};

export default ProjCard;