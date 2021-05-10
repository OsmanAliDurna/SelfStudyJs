import React from 'react';

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="class">
        <h2>Class Component</h2>
        <p>Counter : {this.state.counter}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

export default ClassComponent;
