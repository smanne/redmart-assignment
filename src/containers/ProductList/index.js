import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Product from './Product';
import { loadData } from '../../actions/data';

class Class extends Component {

  static propTypes = {
  }

  componentDidMount() {
    console.log('Loading Data', this.props);
    this.props.loadData();
  }

  render() {
    return [
        <Sidebar key="sidebar" />,
        <div key="list" className="content">
          <Product />
        </div>
    ];
  }
}

const mapStateToProps = (state) => ({
});

const actionCreators = {
  loadData
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Class);
