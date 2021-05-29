import React from "react";

class ExtraCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("Mounting");
  }

  componentDidUpdate() {
    console.log("Component is updated !");
  }

  componentWillUnmount() {
    console.log("Component is about to die ! ");
  }

  handleAddCounter = () => {
    this.setState(function (state) {
      return { counter: state.counter + 1 };
    });
    console.log("Add counter");
  };

  handleSubtractCounter = () => {
    this.setState(function (state) {
      return { counter: state.counter - 1 };
    });
    console.log("Subtract counter");
  };

  handleResetCounter = () => {
    this.setState(function (state) {
      return { counter: 0 };
    });
    console.log("Reset counter");
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleAddCounter}>add</button>
        <button onClick={this.handleSubtractCounter}>subtract</button>
        <button onClick={this.handleResetCounter}>reset</button>
      </div>
    );
  }
}

export default ExtraCounter;
