import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: parseInt(localStorage.getItem('counter')) || 0,
      message: ''
    };
  }

  Increment = () => {
    const { counter } = this.state;
    if (counter < 10) {
      this.setState({ counter: counter + 1, message: '' }, () => {
        localStorage.setItem('counter', this.state.counter);
      });
    } else {
      this.setState({ message: 'Sorry, the limit is reached.' });
    }
  };

  Decrement = () => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({ counter: counter - 1, message: '' }, () => {
        localStorage.setItem('counter', this.state.counter);
      });
    } else {
      this.setState({ message: 'Sorry, the limit is reached.' });
    }
  };

  render() {
    const { counter, message } = this.state;
    return (
      <div>
        <h1>Counter App</h1>
        <div>
          <button onClick={this.Decrement}>-</button>
          <span>{counter}</span>
          <button onClick={this.Increment}>+</button>
        </div>
        {message && <p>{message}</p>}
      </div>
    );
  }
}

export default CounterApp;
