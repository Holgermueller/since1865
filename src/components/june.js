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

  generateArrayOfYears = () => {
    let yearsInRange = [];

    let Then = moment(this.state.then).add(1, "year").format("YYYY");

    yearsInRange.push(Then);

    let andThen = moment(Then).add(1, "year").format("YYYY");

    yearsInRange.push(andThen);

    console.log(yearsInRange);

    // let anotherArray = [];

    // yearsInRange.forEach((year) => {
    //   if (this.testLeapYear(year)) anotherArray.push(year);
    // });
    // console.log(anotherArray);
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
