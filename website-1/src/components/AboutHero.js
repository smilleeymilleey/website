import React from 'react';
import '../App.css';
import './AboutHero.css';



export default function Blog() {
  return (
<div className="container">
  <div className="header">
    <h1>Chania</h1>
  </div>

    <div className="menu">
      <ul>
        <li>The Flight</li>
        <li>The City</li>
        <li>The Island</li>
        <li>The Food</li>
      </ul>
    </div>

<div className="main">
  <h1>The City</h1>
  <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>
</div>


  );
};