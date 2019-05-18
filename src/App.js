import React, { Component } from 'react';
import Tone from 'tone';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("load the drones");

    const effect = new Tone.Vibrato(5, 0.002).toMaster();
    const drone = new Tone.Oscillator(200, "triangle").connect(effect);

    document
      .querySelector('.trigger__start')
      .addEventListener('click', () => {
        drone.start();
      });

    document
      .querySelector('.trigger__stop')
      .addEventListener('click', () => {
        drone.stop();
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Drone</h2>
        </div>
        <div className="triggers">
          <div className="trigger__start" >Start</div>
          <div className="trigger__stop" >Stop</div>
        </div>
      </div>
    );
  }
}

export default App;
