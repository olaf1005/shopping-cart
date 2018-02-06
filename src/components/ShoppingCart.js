import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Homepage from './Homepage';
import ProductDetails from './ProductDetails';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <div className="container">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default ShoppingCart;