import React, { Component } from "react";
//import Moment from "react-moment";
import moment from "moment";

export default class TimerDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      then: "April 09, 1865",
      todaysDate: moment().format("MMMM DD, YYYY"),
    };
  }

  componentDidMount = () => {
    return this.getDurationInYears();
  };

  getDurationInYears = () => {
    moment(this.state.todaysDate, "MMMM DD, YYYY").diff(
      moment(this.state.then, "MMMM DD, YYYYH")
    );
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
        <h1>00:00:00</h1>
        <h1>{this.getDurationInYears()} have passed</h1>
        <div>{this.state.todaysDate.toLocaleString()}</div>
        {/* <h2>Have passed.</h2> */}
      </div>
    );
  }
}
