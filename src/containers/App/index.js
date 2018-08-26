import React, { Component } from 'react';
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

export default App;
