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

  getDurationInMonths = () => {
    let dur = this.state.now - this.state.then;
    let years = moment.duration(dur);
    let mos = moment.duration(dur).months();
    return years.years() * 12 + mos;
  };

  render() {
    return (
      <Card>
        <CardHeader title="Since June 19th, 1865" />

        <CardContent>
          <h1> {this.getDurationInYears()} years have passed.</h1>

          <div>{this.getDurationInMonths()} months have passed.</div>
        </CardContent>
        <CardActions>
          <Button>Button</Button>
        </CardActions>
      </Card>
    );
  }
}
