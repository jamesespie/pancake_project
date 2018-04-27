import React from 'react';
import ReactDOM from 'react-dom';
import Pancake from './Pancake';
import Plate from './Plate';
import Butter from './Butter';
import StackOfPancakes from './StackOfPancakes';
import DynamicStackOfPancakes from './DynamicStackOfPancakes';

ReactDOM.render(<DynamicStackOfPancakes />, document.getElementById('root')); //for part one
//ReactDOM.render(<Pancake />,document.getElementById('root')); //for part two
