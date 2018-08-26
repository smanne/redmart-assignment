import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Product from './Product';
import { loadData } from '../../actions/data';
import { filterProducts } from '../../actions/products';
import { addToCart } from '../../actions/cart';

/**
 * Product list container
 */
class ProductList extends Component {

  static propTypes = {
  }

  componentDidMount() {
    console.log('Loading Data', this.props);
    this.props.loadData();
  }

  render() {
    const { filters, products } = this.props;
    return [
        // Calls redux action filterProducts on filter change
        <Sidebar onFilterChange={this.props.filterProducts} filters={filters} key="sidebar" />,
        <div key="list" className="content">
          <div className="productsGrid">
            {products && products.map(product => {
              return <Product key={product.id} onAddToCart={this.props.addToCart} product={product} />
            })}
          </div>
          
        </div>
    ];
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
  products: state.products
});

const actionCreators = {
  loadData,
  filterProducts,
  addToCart
};

export default connect(
  mapStateToProps,
  actionCreators,
)(ProductList);
