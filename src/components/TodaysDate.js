import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import moment from "moment";

export default class TodaysDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todaysDate: moment().format("MMMM Do, YYYY"),
    };
  }

  render() {
    return (
      <Card style={{ margin: "2% auto" }}>
        <CardContent>
          <h1>Today's date is : {this.state.todaysDate}</h1>
        </CardContent>
      </Card>
    );
  }
}
