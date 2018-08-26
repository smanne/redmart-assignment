import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import '../../App.css';
import Router from '../Router';
import { BrowserRouter } from 'react-router-dom';

/**
 * Root/Template component
 */
class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <div className="app">
          <Header {...this.props} />
          <div className="container">
            <Router />
          </div>
          <footer>
            <div className="copyright">
              Copyright (c) 2018
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
};

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(App);
