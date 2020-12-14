import React from 'react';
import '../App.css';
import './Skills.css';
import {Bar} from 'react-chartjs-2';



const state = {
  labels: ['HTML', 'CSS', 'Javascript', 'React', "Firebase", "Github", "JQuerry"],
  datasets: [
    {
      label: 'Profeciency Level',
      backgroundColor: 'grey',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [100, 97, 99, 98, 97, 98, 90]
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
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      </div>
    );

}
}
