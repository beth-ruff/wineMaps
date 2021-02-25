import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    const wineries = this.props.wineries.map((winery, i) => <li key={i}>{winery.name}</li>)
    return (
      <div className="App">
        <h2>Wineries</h2>
        <ul>
          {this.props.loading ? <h4>Loading...</h4> : wineries}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wineries: state.wineryReducer.wineries,
    loading: state.wineryReducer.loading
  }
}
export default connect(mapStateToProps)(App);
