import React from "react";
import Cards from "./Cards";
import Logger from "./Logger";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggerData: ["welcome i am the logger"] };
  }

  addLogger = (n) => {
    console.log(n);
    const temp = [...this.state.loggerData];
    temp.unshift(n);
    this.setState({
      loggerData: temp,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>🐶boww woww🐶</h1>
          <div className="row">
            <div className="col-sm-8">
              <Cards addLogger={this.addLogger} />
            </div>
            <div className="col-sm-4">
              <Logger logData={this.state.loggerData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
