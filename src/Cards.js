import React, { Component } from "react";
import Card from "./Card";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ data: res });
      });
  }

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
