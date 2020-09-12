import { combineReducers } from 'redux';
import optionSidebar  from './sidebar/reducer/index';
import artworkCategories from "./artworkCategories/reducers/artwork-categories-reducer";
import artworksBySerie from "./artworks/reducers/artworksBySerie-reducer";
import artworks from "./artworks/reducers/artworks-reducer";
import home from './home/reducers/home-reducers.js';
import cart from './cart/reducer/cart-reducer.js';
import series from "./series/reducer/series-reducer";
import products from "./products/reducers/products-reducer";
import product from "./product/reducers/product-reducer";

export default combineReducers({ // combino los reducers de cada reducer para exportarlos
  artworks,
  optionSidebar,
  home,
  cart,
  artworkCategories,
  artworksBySerie,
  series,
  products,
  product
});

