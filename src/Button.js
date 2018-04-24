import React, { Component } from 'react';
import './pancake.css';

class Button extends Component {

  render() {
    return (
		<button onClick={this.props.onClick}>
			Add a pancake!
		</button>
    );
  }
}

export default Button;
