import React, { Component } from "react";
//import Moment from "react-moment";
import moment from "moment";

export default class TimerDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      then: moment("April 09, 1865", "MMMM DD, YYYY").valueOf(),
      now: moment(new Date()).valueOf(),
      todaysDate: moment().format("MMMM DD, YYYY"),
    };
  }

  getDurationInYears = () => {
    let dur = this.state.now - this.state.then;
    let years = moment.duration(dur);
    return years.years();
  };

  getDurationInMonths = () => {
    let dur = this.state.now - this.state.then;
    let x = moment.duration(dur);
    let mos = moment.duration(dur).months();
    return x.years() * 12 + mos;
  };

  render() {
    return (
      <div
        className="timer"
        style={{ width: "55%", margin: "2% auto", textAlign: "center" }}
      >
        <h1>Todays date is: {this.state.todaysDate.toLocaleString()}</h1>
        <h1>Since April 9, 1865</h1>
        <h1>Since June 19, 1865</h1>
        <h1>Since December 6, 1865</h1>

        <h1> {this.getDurationInYears()} years have passed.</h1>

        <div>{this.getDurationInMonths()} months have passed.</div>
      </div>
    );
  }
}
