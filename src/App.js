import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.timeUntilPirateDay = this.timeUntilPirateDay.bind(this);

    this.state = {
      countdownText: ""
    };
  }

  timeUntilPirateDay() {
    let currDate = new Date();
    //If it's currently September 16th... (International Talk Like a Pirate Day)
    if (currDate.getMonth() === 9 && currDate.getDay() === 16) {
      return (
        <div className="pirateDay">
          <p>It's International Talk Like a Pirate Day!</p>
        </div>
      );
    }
    //Else give a countdown
    else {
      // Set the date we're counting down to
      let nextPirateDay;
      if (currDate.getMonth() > 9 || (currDate.getMonth() === 9 && currDate.getDate() > 16)) {
        nextPirateDay = "September 16, " + (currDate.getFullYear() + 1) + " 0:0:0";
      } else {
        nextPirateDay = "September 16, " + currDate.getFullYear() + " 0:0:0";
      }
      console.log("Next Pirate Day: " + nextPirateDay);
      let countDownDate = new Date(nextPirateDay).getTime();
      // Update the count down every 1 second
      // let timerCountDown = setInterval(function () {
      setInterval(function () {
        // Get today's date and time
        currDate = new Date();
        let now = currDate.getTime();
        console.log("Now: " + now);

        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        console.log("Distance: " + distance);

        // console.log("Days calc: " + Math.floor(distance / (1000 * 60 * 60 * 24)));
        // Time calculations for days, hours, minutes and seconds
        //this.setState( {days : Math.floor(distance / (1000 * 60 * 60 * 24))});
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //this.setState( {hours : Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)});
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //this.setState( {minutes : Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60)});
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //this.setState( {seconds : Math.floor(distance % (1000 * 60)) / 1000});
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({countdownText: "...but it's " + days + " day(s), " + hours + " hour(s), " + minutes + " minute(s), and " + seconds + " second(s) until International Talk Like a Pirate Day"});

        // If the count down is finished, write some text
        if (distance < 0) {
          return (
            <div className="countdown">
              <p>It's International Talk Like a Pirate Day!</p>
            </div>
          );
        } else {
          // Display the result TODO: This isn't getting usefully passed back -- it's just being set in the App render function
          return (
            <div className="countdown">
              <p>{this.state.countdownText}</p>
            </div>
          );
        }
      }.bind(this), 1000);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Is it time to talk like a pirate?
          </p>
        </header>
        <div className="App-yes">
          <p>
            Aye!
          </p>
        </div>
        <div className="App-countdown">
          <p>
            {this.state.countdownText}
            {this.timeUntilPirateDay()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
