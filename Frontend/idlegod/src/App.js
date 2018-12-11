import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from "./Components/apiManager";
class App extends Component {
  state = {
    user: {},
    interval: 20000,
    timer: 20
  }
  
  componentDidMount() {
    this.refreshValues();
    this.startTimer(this.state.interval / 1000, document.getElementById("timer"))
    setInterval(this.createValuesForInterval, this.state.interval);
    console.log(this.state.timer);
    
  }

  refreshValues = () => {
    Api.getUsers()
    .then(response => {
      this.setState({
        user: response[0]
      })
    })
  }

  startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}
  createValuesForInterval = () => {
    let user = this.state.user;
    let moneyUpdate = user.money + user.salary;
    let xpUpdate = user.experience + user.xpGain;
    this.setState({
      user: {
        userId: user.userId,
        level: user.level,
        money: moneyUpdate,
        salary: user.salary,
        experience: xpUpdate,
        xpToLevel: user.xpToLevel,
        xpGain: user.xpGain
      }
    })
    console.log(this.state.user);
    
    Api.updateValues(this.state.user)
    .then(res => {
      this.refreshValues();
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Level {this.state.user.level}</h1>
        <h3 id="timer"></h3>
        <div className="xpAndIncome">
          <h5>Money: {this.state.user.money}</h5>
          <h5>Experience: {this.state.user.experience}/{this.state.user.xpToLevel}</h5>
          <h5>Salary: {this.state.user.salary}</h5>
          <h5>Experience Gain: {this.state.user.xpGain}</h5>
        </div>
        <div className="purchases">
          <p>Purchases coming soon</p>
        </div>
      </div>
    );
  }
}

export default App;
