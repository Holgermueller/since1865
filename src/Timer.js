import React, { Component } from "react";
//import Moment from "react-moment";
import moment from "moment";

export default class TimerDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      then: "1865",
      now: moment().format("YYYY"),
      todaysDate: moment().format("MMMM Do, YYYY"),
    };
  }

  getDurationInYears = () => {
    return moment(this.state.now).diff(moment(this.state.then));
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
