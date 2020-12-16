
import React from 'react';
import '../../App.css'
import '../BlogPage.css';
import Footer from '../Footer';

function quincyClick() {
  window.open("https://medium.com/p/fe6464bb4b03");
};

function productivityClick() {
  window.open("https://caitlynmiley-cm.medium.com/positive-productivity-on-a-slow-day-d958d443a3c9");
};


export default function Blog() {




  return (
    <div className='Blog-Container'>
      <div className="Header">
        <h1 className="blog"> Welcome To My Blog!</h1>

      </div>

      <div className='Blog1'>

        <div className="Quincy">
           <h2 className="title"> Quincy Larson from FreeCodeCamp Mentored Me</h2>

              <p className="para" onClick={quincyClick}>
                My research phase included attending as many events as humanly possible, talking to established individuals in the fields of tech and psychology, and reading as many articles on the subject that I could. I have cultivated conversations with the community and was delighted when FreeCodeCamps Quincy Larson agreed to have a meeting with me. At first, I figured this would be a run of the mill "tips for new developers and mistakes they should avoid" kind of discussion, but I was far more pleased with the topics we were able to get in to.</p>
              <p className="pub">Published on Medium.com<br /> 3 minute read</p>






      </div>

        <div className='Blog2' >
            <div className="Productivity">
              <h2 className="title">Positive Productivity On A "Slow Day</h2>

              <p className="para" onClick={productivityClick}>
                Remember the last time you felt un-stoppable? You were energetic, focused, and crossed off everything on your to-do list (maybe even more). Wouldn’t it be great if every day, we could be this productive? If, even on our “slow days” we found a way to knock through all of our tasks, and went to bed at night feeling accomplished and fulfilled? Does it sound too good to be true?
                Well, it doesn't have to be! You see, even though each day comes with its own unique problems, there are usually more ways we can set ourselves up for success than there are problems holding us back. As long as you design your life to your goals, acknowledge what is holding you back, and define your motivations, you can stay unstoppable. Lets dive in!
              </p>
              <p className="pub"> Published on Medium.com<br /> 4 minute read</p>

            </div>
            <div className="Footer">
          <Footer />
          </div>
          </div>
         </div>
         </div>






);

}
