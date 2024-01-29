import React, { PureComponent } from "react";

export default class PureCounterComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: false,
    };
  }
  handleCounter = () => {
    if (this.state.toggle) {
      this.setState((previous) => ({ count: previous.count + 1 }));
    } else {
      this.setState((previous) => ({ count: previous.count }));
    }
  };
  handleToggle = () => {
    if (!this.state.toggle) {
      this.setState({ toggle: true });
    } else {
      this.setState({ toggle: false });
    }
  };
  render() {
    return (
      <div>
        {console.log("This is Pure Component")}
        <h1>Pure Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleCounter}>Counter</button>
      </div>
    );
  }
}
