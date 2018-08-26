import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';

/**
 * Sidebar component
 */
export default class Sidebar extends Component {

  static propTypes = {
    filters: PropTypes.array
  }

  render() {
    return (
      <div className="sidebar sidebar--blue">
        <Filters onFilterChange={this.props.onFilterChange} filters={this.props.filters} />
      </div>
    );
  }
}

