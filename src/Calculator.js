import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: ''
    };
  }

 InputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  add = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) + parseFloat(num2);
    this.setState({ result });
  }

  subtract = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) - parseFloat(num2);
    this.setState({ result });
  }

  multiply = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) * parseFloat(num2);
    this.setState({ result });
  }

  divide = () => {
    const { num1, num2 } = this.state;
    const result = parseFloat(num1) / parseFloat(num2);
    this.setState({ result });
  }

  render() {
    return (
      <div>
        <input type="text" name="num1" value={this.state.num1} onChange={this.InputChange} />
        <input type="text" name="num2" value={this.state.num2} onChange={this.InputChange} />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <div>Result: {this.state.result}</div>
      </div>
    );
  }
}

export default Calculator;