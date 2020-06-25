import React, { Component } from "react";
import TodaysDate from "./components/TodaysDate";
import CWDisplay from "./components/cw";
import JuneDisplay from "./components/june";
import ThirteenthDisplay from "./components/thirteenth";

export default class TimerDisplay extends Component {
  render() {
    return (
      <div
        className="timer"
        style={{ width: "55%", margin: "2% auto", textAlign: "center" }}
      >
        <TodaysDate />

        <CWDisplay />

        <JuneDisplay />

        <ThirteenthDisplay />
      </div>
    );
  }
}
