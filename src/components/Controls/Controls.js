import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import './Controls.css';

const formHeader = () => (
  <h3>Pick a recipe and tap start to get started</h3>
);

const recipeNames = [
  'Oscar Sauce',
  'Scredriver'
];

const formBody =() => (
  <div className="RecipeDropdown">
    <Dropdown />
  </div>
);

class Controls extends Component {
  render() {
    return (
        <div className="ControlsContainer">
          <div className="ControlsHeader">
            <formHeader />
          </div>

          <div className="ControlsForm">

          </div>
        </div>
    );
  }
}

export default Controls;
