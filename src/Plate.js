import React, { Component } from 'react';
import './pancake.css';

class Plate extends Component {
  render() {
    return (
		<div className="plate">
			<div className="plate-bottom"></div>
			<div className="shadow"></div>
	  </div>
    );
  }
}

export default Plate;
