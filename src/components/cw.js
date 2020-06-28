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
      then: moment("April 09, 1865", "MMMM DD, YYYY").valueOf(),
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

  getDurationTotalMonths = () => {
    let dur = this.state.now - this.state.then;
    let years = moment.duration(dur);
    let mos = moment.duration(dur).months();
    return years.years() * 12 + mos;
  };

  render() {
    return (
      <Card style={{ margin: "2% auto" }}>
        <CardHeader title="Since April 9th, 1865" />

        <CardContent>
          <h1>{this.displayAllDateInfo()}</h1>

          <div>{this.getDurationTotalMonths()} months have passed.</div>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="large">Significance of this date</Button>
        </CardActions>
      </Card>
    );
  }
}
