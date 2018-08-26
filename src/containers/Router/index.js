import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
  import ProductDetail from '../ProductDetail';
  import ProductList from '../ProductList';
  import Cart from '../Cart';
  
/**
 * React router configuration
 */
export default () => (
    <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
    </Switch>
);
