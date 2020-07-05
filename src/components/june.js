import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
} from "@material-ui/core";
import { Moment, moment } from "moment";
import { extendedMoment } from "moment-range";

const moment = extendedMoment(Moment);

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

  generateArrayOfYears = () => {
    let then = this.state.then;
    let now = this.state.now;
    let yearsInRange = moment.range(then, now);

    // let Then = moment(this.state.then).add(1, "year").format("YYYY");

    //   while (moment(now).diff(moment(then), "years") >= 0) {
    //     yearsInRange.push(moment(then).add(1, "year").format("YYYY"));
    //     moment(then).add(1, "year").format("YYYY");
    //   }

    console.log(yearsInRange);
  };

  testLeapYear = (year) => {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 4000 === 0)
    ) {
      return year;
    } else {
      return false;
    }
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

          <div>Years in array: {this.generateArrayOfYears()}</div>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="large">Significance of this date</Button>
        </CardActions>
      </Card>
    );
  }
}
