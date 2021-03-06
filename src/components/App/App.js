import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Controls from '../Controls/Controls';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AppContent">
        <div className="AppHeader">
          <h1>Saucinator</h1>
          <h4>don't get lost; let's have a drink</h4>
        </div>
        <Controls dispatch={this.props.dispatch} />

        {
          this.props.error ?
            <div className="AppHeader">
              <h4>Big booboo my dude</h4>
              <pre>
                <code>{JSON.stringify(this.props.error, null, 2)}</code>
              </pre>
            </div> :
            <div />
        }

        <div>
          <pre>
            <code>{JSON.stringify(this.props, null, 2)}</code>
          </pre>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    remoteStatus,
    lastAction,
    defaultDrink,
    error
  } = state || {
    remoteStatus: null,
    lastAction: null,
    defaultDrink: null,
    error: null
  };

  console.dir(state.error);

  return {
    remoteStatus,
    lastAction,
    defaultDrink,
    error: error ? error.message : null
  };
};

export default connect(mapStateToProps)(App);
