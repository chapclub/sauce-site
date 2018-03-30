import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import './Controls.css';

import { OscarSauceRecipe, actions } from '../../saucinator';

const FormHeader = () => (
  <h4>Pick a recipe and tap start to get started</h4>
);

const drinks = [
  {
    label: 'Oscar Sauce',
    value: OscarSauceRecipe
  },
];

const ControlsForm = ({ drinks, value, onDropdownChange, onSubmit }) => (
  <div className="ControlsForm">
    <Dropdown
      options={drinks}
      value={value}
      onChange={onDropdownChange} />

    <span className="ControlsButton" onClick={onSubmit}>
      <h4>Sauce Me</h4>
    </span>
  </div>
);

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDrink: null,
      submit: false
    };
  }

  onDropdownChange = (selectedDrink) => {
    this.setState({ selectedDrink: selectedDrink });
  };

  onSubmit = () => {
    if (this.state.selectedDrink) {
      const { dispatch } = this.props;
      const { selectedDrink } = this.state;
      dispatch( actions.makeDrink(selectedDrink.value) );
    }
  };

  render() {
    return (
        <div className="ControlsContainer">
          <div className="ControlsHeader">
            <FormHeader />
          </div>

          <ControlsForm
            drinks={drinks}
            value={this.state.selectedDrink}
            onSubmit={this.onSubmit}
            onDropdownChange={this.onDropdownChange}/>

        </div>
    );
  }
}

export default Controls;
