import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    };
  }

  handleColorChange = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleColorChange('red')}>Red</button>
          <button onClick={() => this.handleColorChange('green')}>Green</button>
          <button onClick={() => this.handleColorChange('blue')}>Blue</button>
        </div>
        <div style={{ backgroundColor: this.state.color, width: '150px', height: '150px' }}></div>
      </div>
    );
  }
}

export default ColorPicker;
