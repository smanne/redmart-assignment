import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from './Filters';

class Sidebar extends Component {

  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="sidebar">Sidebar Component
        <Filters />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Sidebar);
