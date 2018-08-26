import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { clearCart } from '../../actions/cart';

/**
 * Cart component
 */
class Cart extends Component {

  render() {
    const { cart } = this.props;
    return (
      <div className="content">
        <div className="cart">
          <div className="cart_products">
            {cart && cart.items.map(cartItem => {
              return <Link to={`/product/${cartItem.id}`}>
                <div className="cart_item">
                  <div className="cart_itemImage">
                    <img alt={cartItem.name} src={`/images/${cartItem.image}`} />
                  </div>
                  <div className="cart_itemAttributes">
                    <div className="cart_itemName">
                      {cartItem.name}
                    </div>
                    <div className="cart_itemMeasurement">
                      {cartItem.measurement}
                    </div>
                    <div className="">
                      ${cartItem.price}
                    </div>
                  </div>
                </div>
              </Link>
            })}
          </div>
          <div className="cart_clear">
            {/* Calls clear cart redux action on click  */}
            <button onClick={this.props.clearCart} className="btn btn--orange">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
};

const actionCreators = {
  clearCart
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Cart);
