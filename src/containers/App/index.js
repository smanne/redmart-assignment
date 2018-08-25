import React, { Component } from 'react';
import Header from '../Header';
import '../../App.css';
import ProductList from '../ProductList';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <ProductList />
        </div>
        <footer>
          Copyright (c) 2018
        </footer>
      </div>
    );
  }
}

export default App;
