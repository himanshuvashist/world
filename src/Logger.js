import React, { Component } from "react";

export default class Logger extends Component {
  render() {
    return (
      <>
        {this.props.logData.map((item) => (
          <div className="row" key={item}>
            <div className="card">{item}</div>
          </div>
        ))}
      </>
    );
  }
}
