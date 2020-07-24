import React, { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

function Cart(props) {
  const [cart, setCart] = useState(0);

  // useEffect(() => {

  // }, []);

  // const totalAmount = (props)=>{

  //   if(props.data.length){

  //     const products = props.data
  //     return products.reduce((obj1, obj2)=>{

  //        obj1.totalPrice + obj2.totalPrice

  //     })

  //     } else return 0
  // }

  const handleQntChange = (e) => {
    console.log(e.target);
  };

  return (
    <div className="cart-content">
      {props.data.length ? (
        props.data.map((productCart) => {
          return (
            <ul className="cart-content__item-container">
              <li>
                <ul className="cart-content__item-list">
                  <li>
                    <div className="cart-content__img-div">
                      <img alt="" />
                    </div>
                  </li>
                  <li>
                    Producto: <span>{productCart.product.name}</span>
                  </li>
                  <li>
                    precio: <span>{productCart.product.price}</span>
                  </li>
                  <li>
                    cantidad: {productCart.quantity}
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faArrowCircleUp} size="xs" />{" "}
                      <FontAwesomeIcon
                        icon={faArrowCircleDown}
                        size="xs"
                        onChange={() => handleQntChange}
                      />
                    </span>
                  </li>
                  <li>
                    total: <span>{}</span>
                  </li>
                </ul>
              </li>
            </ul>
          );
        })
      ) : (
        <ul className="cart-content__item-container">
          <li>
            <ul className="cart-content__item-list">
              <li>
                <span>There is no items in your cart! </span>
              </li>
            </ul>
          </li>
        </ul>
      )}
      <div>{/* <span>TOTAL: {totalAmount(props)}</span> */}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    cart: { data },
  } = state;

  return {
    data,
  };
};

export default connect(mapStateToProps, null)(Cart);
