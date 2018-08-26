import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadData } from '../../actions/data';
import { addToCart } from '../../actions/cart';

/**
 * Product Detail page
 */
class ProductDetail extends Component {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { product } = this.props;
    return (
      <div className="content">
        {product? <div className="productDetails">
          <div className="productDetail_name">
            {product.name}
          </div>
          <div className="productDetails_grid">
            <div className="productDetail_thumb">
              <img alt="" src={`/images/${product.image}`} />
            </div>
            <div className="productDetail_attributes">
              <div className="productDetail_measurement">
                {product.measurement}
              </div>
              <div className="productDetail_price">
                ${product.price}
              </div>
              <div className="productDetail_desc">
                {product.desc}
              </div>
              <div className="productDetail_cartButton">
                <button onClick={() => this.props.addToCart(product)} className="btn btn--orange">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>: ""} 
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.find((product) => product.id === parseInt(ownProps.match.params.id, 10))
  }
};

const actionCreators = {
  loadData,
  addToCart
};

export default connect(
  mapStateToProps,
  actionCreators,
)(ProductDetail);
