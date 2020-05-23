import { RECEIVE_PRODUCTS } from "../../constants";
import axios from "axios";

export const receiveProducts = function(productList) {
  return {
    type: RECEIVE_PRODUCTS,
    productList
  };
};
export const fetchProducts = (prodNameUrl) => dispatch => {
    return axios
      .get(`/api/products/${prodNameUrl}`,)
      .then(res => res.data)
      .then(productList => {
          // console.log(productList, "productList")
        dispatch(receiveProducts(productList));
      });
  };