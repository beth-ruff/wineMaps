import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h2>Wineries</h2>
      </div>
    );
  }
}

export default connect()(App);
