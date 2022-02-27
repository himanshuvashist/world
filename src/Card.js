import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: "white" };
  }

  componentWillUnmount() {
    this.props.addLogger(`REMOVED: ${this.props.data.name}`);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    return (
      <div className="card mb-2" style={{ background: this.state.color }}>
        {`${this.props.data.name}`}
        <div
          className="btn btn-primary"
          onClick={() => this.props.removeOne(this.props.index)}
        >
          remove me
        </div>
      </div>
    );
  }
}
