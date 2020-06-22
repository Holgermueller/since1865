import React, { Component } from "react";
//import Moment from "react-moment";
import moment from "moment";

export default class TimerDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      then: moment(1865, 3, 4),
      now: moment(new Date()),
      todaysDate: moment().format("MMMM DD, YYYY"),
    };
  }

  getDurationInYears = () => {
    return this.state.then.add(this.state.now, "years");
  };

  render() {
    return (
      <div
        className="timer"
        style={{ width: "55%", margin: "2% auto", textAlign: "center" }}
      >
        <h1>Since April 9, 1865</h1>
        <h1>Since June 19, 1865</h1>
        <h1>Since December 6, 1865</h1>

        <h1> {this.getDurationInYears()} have passed</h1>
        <div>{this.state.todaysDate.toLocaleString()}</div>
      </div>
    );
  }
}
