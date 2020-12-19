import React from 'react';
import './BlogPage.css';
import $ from 'jquery';

$('#circleDrop').click(function(){
	$('.card-middle').slideToggle();
	$('.close').toggleClass('closeRotate');
  });




function Cards() {
    return (
<div class="row">
  <div class="small-7 medium-5 large-4 column end small-centered card">
    <div class="card-top"><a href="#0">
        <div class="overlay">
          <h1>READ</h1>
        </div></a><img class="card-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/324479/yeti.png"/></div>
    <div class="triangle">
      <div class="circle-button" id="circleDrop"><img class="close" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/324479/close.svg"/></div>
    </div>
    <div class="card-middle">
      <h5 class="more">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque natus delectus praesentium laudantium molestias.</h5>
    </div>
    <div class="card-bottom text-center">
      <h2 class="card-title">Foundation</h2>
    </div>
  </div>
</div>



    )
    };
export default Cards;