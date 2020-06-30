import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
} from "@material-ui/core";
import moment from "moment";

export default class CWDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      then: moment("June 19, 1865", "MMMM DD, YYYY").valueOf(),
      now: moment(new Date()).valueOf(),
    };
  }

  getDurationInYears = () => {
    let dur = this.state.now - this.state.then;
    return moment.duration(dur).years();
  };

  getMonthsDuration = () => {
    let dur = this.state.now - this.state.then;
    return moment.duration(dur).months();
  };

  getDaysDuration = () => {
    let dur = this.state.now - this.state.then;
    return moment.duration(dur).days();
  };

  getLeapYears = () => {
    let leapYearCount = 0,
      then = this.state.then,
      now = this.state.now,
      beginYear = 0,
      endYear = 0;

    let isLeapYear = function (year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    if (now < then) {
    }

    for (let i = beginYear; i <= endYear; i++) {
      if (isLeapYear(i)) {
        leapYearCount++;
      }
    }

    return leapYearCount;
  };

  displayAllDateInfo = () => {
    return (
      this.getDurationInYears() +
      " years, " +
      this.getMonthsDuration() +
      " months, and " +
      this.getDaysDuration() +
      " days have passed."
    );
  };

  getDurationInMonths = () => {
    let dur = this.state.now - this.state.then;
    let years = moment.duration(dur);
    let mos = moment.duration(dur).months();
    return years.years() * 12 + mos + " months have passed.";
  };

  render() {
    return (
      <Card style={{ margin: "2% auto" }}>
        <CardHeader title="Since June 19th, 1865" />

        <CardContent>
          <h1>{this.displayAllDateInfo()}</h1>

          <div>{this.getDurationInMonths()} </div>

          <div>{this.getLeapYears()}</div>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="large">Significance of this date</Button>
        </CardActions>
      </Card>
    );
  }
}
