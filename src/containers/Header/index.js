import React, { Component } from 'react';

export default class Header extends Component {

  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <header>
        <ul className="header_nav">
          <li className="header_logo">Logo</li>
          <li><a className="btn btn--blue">Browse</a></li>
          <li><a className="btn btn--orange">Cart</a></li>
        </ul>
      </header>
    );
  }
}