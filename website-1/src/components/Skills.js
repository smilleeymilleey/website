import React from 'react';
import '../App.css';
import './Skills.css';
import {Bar} from 'react-chartjs-2';



const state = {
  labels: ['HTML', 'CSS', 'Javascript', 'React', "Firebase", "Github", "X"],
  datasets: [
    {
      label: 'Profeciency Level',
      backgroundColor: 'grey',
      borderColor: 'black',
      borderWidth: 5,
      data: [85, 90, 85, 90, 80, 98, 70]

    }
  ]
}

export default class App extends React.Component {
  render() {
    return (

      <div className="hero-container">
        <h1 className="welcomeSkills"> Skills </h1>
        <div className="graph">

        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Programming Languages',
              fontSize:50
            },
            legend:{
              display:true,
              position:'right',

            }
          }}
        />
      </div>
      </div>
    );

}
}
