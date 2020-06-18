import React, { Component } from "react";
import Moment from "react-moment";

export default class TimerDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "",
    };
  }

  render() {
    return (
      <div
        className="timer"
        style={{ width: "55%", margin: "2% auto", textAlign: "center" }}
      >
        <h1>00:00:00</h1>
        <Moment format="MMMM Do, YYYY" />
        <h2>Have passed.</h2>
      </div>
    );
  }
}
