
import React from 'react';
import '../../App.css'
import '../BlogPage.css';
import Footer from '../Footer';



export default function Blog() {
  return (
    <div className='Blog-Container'>
      <div className="Header">
        <h1 className="welcome"> Caitlyn's Blog</h1>
          <h2 className="header">
            Welcome. Happy reading! </h2>
      </div>

      <div className='Blog1'>
          <h1 className="welcome">Blog Post 1</h1>
            <img className="quincy" src= "quincy.png"></img>

      </div>

          <div className='Blog2'>
            <h1 className="welcome"> Blog Post 2</h1>
              <img className="quincy" src= "productivity.png"></img>
                <h2 className="header">
                  Blog Post 2 </h2>

    </div>

    <Footer />
     </div>





);

}
