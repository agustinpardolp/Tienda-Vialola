import { combineReducers } from 'redux';
import optionSidebar  from './sidebar/reducer/index';
import productsCategories from "./productsCategories/reducers/product-categories-reducer"
import products from "./products/reducers/products-reducer"
import home from './home/reducers/home-reducers.js';
import cart from './cart/reducer/cart-reducer.js';
import product from './product/reducers/product-reducer.js';
import series from "./series/reducer/series-reducer";

export default combineReducers({ // combino los reducers de cada reducer para exportarlos
  products,
  optionSidebar,
  home,
  cart,
  productsCategories,
  product,
  series
});

