import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      counter: 0,
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("Get Derived State From Props");
    console.log("----------------------------");
    if (props.seed && props.seed !== state.seed) {
      return { seed: props.seed, counter: props.seed };
    }
    return null;
  };
  increment = () => {
    this.setState((prev) => ({ ...this.state, counter: prev.counter + 1 }));
  };
  decrement = () => {
    this.setState((prev) => ({ ...this.state, counter: prev.counter - 1 }));
  };

  componentDidMount = () => {
    console.log("Component Did Mount");
    console.log("-------------------");
  };
  componentDidUpdate = (prevprops, prevstate, snapshot) => {
    console.log("Component Did Update");
    console.log("--------------------");
  };
  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("----------------------");
  }
  shouldComponentUpdate(nextprops, nextstate) {
    console.log("********** nextProps", nextprops);
    console.log("****** props", this.props);
    if (
      nextprops.ignoreProp &&
      nextprops.ignoreProp !== this.props.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      return false;
    }
    console.log("Should Component Update - RENDER");
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Get Snapshot Before Update");
    console.log("--------------------------");
    return null;
  };

  componentDidCatch = (error, info) => {
    console.log("Component Did Catch");
  };

  render() {
    console.log("Render");
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter {this.state.counter} </div>{" "}
      </>
    );
  }
}

export default Counter;
