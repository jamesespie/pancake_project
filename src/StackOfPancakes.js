import React, { Component } from 'react';
import Butter from './Butter';
import Pancake from './Pancake';
import Plate from './Plate';
import './pancake.css';

class StackOfPancakes extends Component {
  render() {
    return (
		<div>
			<Butter />
			<Pancake flavor="" />
			<Pancake flavor="" />
			<Pancake flavor="" />
			<Plate />
		</div>
	)
  }
}

export default StackOfPancakes;
