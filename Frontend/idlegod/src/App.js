import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from "./Components/apiManager";
class App extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    this.refreshValues()
  }
  startOver = () => {
    let user = this.state.user
    this.setState(
      {
        user: {
          userId: user.userId,
          level: 1,
          money: 0,
          salary: 25,
          experience: 0,
          xpToLevel: 500,
          xpGain: 10,
          xpBumpPrice: 500,
          salaryBumpPrice: 750,
          timerDecreasePrice: user.timerDecreasePrice,
          timer: user.timer
        }
      }
    )
    Api.updateValues(this.state.user)
    // .then(res => {
    //   this.refreshValues();
    // })
  }
  xpGainPurchase = () => {
    let user = this.state.user;
    let price = user.xpBumpPrice;
    let newXpGain = user.xpGain * 2;
    let newMoneyAmount = user.money - price;
    this.setState({
      user: {
        userId: user.userId,
        level: user.level,
        money: newMoneyAmount,
        salary: user.salary,
        experience: user.experience,
        xpToLevel: user.xpToLevel,
        xpGain: newXpGain,
        xpBumpPrice: user.xpBumpPrice * 3,
        salaryBumpPrice: user.salaryBumpPrice,
        timerDecreasePrice: user.timerDecreasePrice,
        timer: user.timer
      }
    })
    Api.updateValues(user)
  }
  salaryGainPurchase = () => {
    let user = this.state.user;
    let price = user.salaryBumpPrice;
    let newSalary = user.salary * 2;
    let updatedMoney = user.money - price;
    if(user.money < price){
      alert(`You don't have enough money. You are $${price - user.money} short.`);
    }
    else{
    this.setState({
      user: {
        userId: user.userId,
        level: user.level,
        money: updatedMoney,
        salary: newSalary,
        experience: user.experience,
        xpToLevel: user.xpToLevel,
        xpGain: user.xpGain,
        xpBumpPrice: user.xpBumpPrice,
        salaryBumpPrice: user.salaryBumpPrice * 3,
        timerDecreasePrice: user.timerDecreasePrice,
        timer: user.timer
      },
    })
  }
  Api.updateValues(user)
  // .then(res => {
  //   this.refreshValues();
  // })
  }
  refreshValues = () => {
    Api.getUsers()
    .then(response => {
      this.setState({
        user: response[0]
      })
    })
  }
  levelUp = (moneyUpdate, xpUpdate) => {
    let user = this.state.user;
    let newLevel = user.level + 1;
    let newXpToLevel = (user.xpToLevel * 2) + user.xpToLevel;
    this.setState({
      user: {
        userId: user.userId,
        level: newLevel,
        money: moneyUpdate,
        salary: user.salary,
        experience: xpUpdate,
        xpToLevel: newXpToLevel,
        xpGain: user.xpGain,
        xpBumpPrice: user.xpBumpPrice,
        salaryBumpPrice: user.salaryBumpPrice,
        timerDecreasePrice: user.timerDecreasePrice,
        timer: user.timer
      }
    })
    Api.updateValues(this.state.user)
    .then(response => {
      this.refreshValues()
    })
    .then(res => {
      alert(`Congrats, you are now Level ${newLevel}`);
    })
  }
  startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    const valuesForIncrease = this.createValuesForInterval;
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
            valuesForIncrease();
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
      xpGain: user.xpGain,
      xpBumpPrice: user.xpBumpPrice,
      salaryBumpPrice: user.salaryBumpPrice,
      timerDecreasePrice: user.timerDecreasePrice,
      timer: user.timer
    }
  })
  Api.updateValues(this.state.user)
  .then(res => {
    this.refreshValues()
      if(user.experience >= user.xpToLevel)
      {
        this.levelUp(moneyUpdate, xpUpdate);
      }
  })
}

  render() {
    return (
      <div className="App">
        <h1>Level {this.state.user.level}</h1>
        <h3 id="timer"></h3>
        <div className="xpAndIncome">
          <h5>Money: ${this.state.user.money}</h5>
          <h5>Experience: {this.state.user.experience}/{this.state.user.xpToLevel}</h5>
          <h5>Salary: ${this.state.user.salary}</h5>
          <h5>Experience Gain: {this.state.user.xpGain}</h5>
          <button onClick={this.startOver}>Start Over</button>
        </div>
        <div className="purchases">
          <h5>Buy this to double your salary!</h5>
          <button onClick={this.salaryGainPurchase}>${this.state.user.salaryBumpPrice}</button>
          <h5>Buy this to double your experience gain!</h5>
          <button onClick={this.xpGainPurchase}>${this.state.user.xpBumpPrice}</button>
          <h5>Buy this to decrease the timer by one second!</h5>
          <button>${this.state.user.timerDecreasePrice}</button>
        </div>
      </div>
    );
    this.startTimer(this.state.user.timer, document.getElementById("timer"))
  }
}

export default App;
