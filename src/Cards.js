import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  //TODO
  // url "https://jsonplaceholder.typicode.com/users"
  // fetch the data upon component mount

  removeOne = (i) => {
    const newData = [...this.state.data];
    newData.splice(i, 1);
    this.setState({ data: newData });
  };

  removeMe = () => {
    this.setState({ data: [] });
  };

  component;

  render() {
    return (
      <>
        <div className="container">
          {this.state.data.map((e, i) => (
            <Card
              key={e.id}
              data={e}
              index={i}
              addLogger={this.props.addLogger}
              removeOne={this.removeOne}
            />
          ))}
        </div>
      </>
    );
  }
}
