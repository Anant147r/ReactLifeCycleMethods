import React from "react";
import Counter from "./Counter/Counter";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mount: true, ignoreProp: 0, seed: 40 };
    this.mountCounter = () => {
      this.setState({ mount: true });
    };
    this.unmountCounter = () => {
      this.setState({ mount: false });
    };
    this.ignoreProp = () => {
      this.setState({ ...this.state, ignoreProp: Math.random() });
    };
    this.seedGenerator = () => {
      this.setState({
        ...this.state,
        seed: Number.parseInt(Math.random() * 1000),
      });
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter}>Mount</button>
        <button onClick={this.unmountCounter}>Unmount</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate seed</button>
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}

export default App;
