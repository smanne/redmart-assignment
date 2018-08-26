import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/**
 * Render product tiles in product list page
 */
export default class Product extends Component {

  render() {
    const {product} = this.props;
    return (
      <div className="productCard">
        <Link key={product.name} to={`product/${product.id}`}>
          <div className="productCard_image">
            <img alt={`${product.name}`} src={`/images/${product.image}`} />
          </div>
        </Link>
        <Link key={product.id} to={`product/${product.id}`}>
          <div className="productCard_name">
            {product.name}
          </div>
        </Link>
        <div className="productCard_measurement">
          {product.measurement}
        </div>
        <div className="productCard_price">
          ${product.price}
        </div>
        <div className="productCard_cartButton">
          <button onClick={() => this.props.onAddToCart(product)} className="btn btn--orange">Add To Cart</button>
        </div>
      </div>
    )
  }
}
