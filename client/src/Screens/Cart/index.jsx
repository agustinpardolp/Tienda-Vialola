import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import ButtonsGroup from "../../components/ButtonsGroup";
import { connect } from "react-redux";
import Table from "../../components/Table";
import { useCart } from "../../hooks";
import { receiveCreatedCart } from "../../redux/cart/actions/cart-actions";

const StyledCartContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  .table-responsive {
    margin-top: 4%;
  }
  #basket .table tbody tr td,
  #content #customer-order .table tbody tr td {
    vertical-align: middle;
  }

  #basket .table tbody tr td input,
  #content #customer-order .table tbody tr td input {
    width: 50px;
    text-align: right;
  }
  #basket .table tbody tr td img,
  #content #customer-order .table tbody tr td img {
    width: 50px;
  }

  #basket .table tfoot,
  #content #customer-order .table tfoot {
    font-size: 1.125rem;
  }
`;

function Cart({ productsToCart, receiveCreatedCart }) {
  const [cart, setCart] = useState(0);
  let { deleteFromCart } = useCart(productsToCart, receiveCreatedCart);
  const columns = React.useMemo(
    () => [
      {
        id: "1",
        styles: { fontWeight: "bold" },
        name: "Image",
        dataField: "img",
      },
      {
        id: "2",
        styles: { fontWeight: "bold" },
        name: "Product",
        dataField: "name",
      },
      {
        id: "3",
        styles: { fontWeight: "bold" },
        name: "Description",
        dataField: "description",
      },
      {
        id: "4",
        styles: { fontWeight: "bold" },
        name: "Quantity",
        dataField: "quantity",
      },
      {
        id: "5",
        styles: { fontWeight: "bold" },
        name: "Unit price",
        dataField: "price",
      },
      {
        id: "6",
        styles: { fontWeight: "bold" },
        name: "Total",
        dataField: "total",
      },
      {
        id: "7",
        styles: { fontWeight: "bold" },
        name: "",
        dataField: "delete",
      },
    ],
    []
  );

  const totalAmount = (productsToCart) => {
    if (productsToCart.length) {
      const products = productsToCart;
      return products.reduce((acc, obj) => {
        return (acc += obj.total);
      });
    } else return 0;
  };

  const handleQuantity = (e) => {};

  return (
    <StyledCartContainer>
      <div id="basket" class="col-lg-12">
        <div class="box">
          <form method="post" action="checkout1.html">
            <h1>Shopping cart</h1>
            <p class="text-muted">
              You currently have {productsToCart.length} item(s) in your cart.
            </p>
            <Table
              className="table"
              columns={columns}
              data={productsToCart}
              onDelete={deleteFromCart}
              onIncrease={handleQuantity}
              disableLink={true}
            ></Table>
            <ButtonsGroup path={"/shop/prints"} />
          </form>
        </div>
      </div>
    </StyledCartContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    cart: { data: productsToCart },
  } = state;

  return {
    productsToCart,
  };
};

export default connect(mapStateToProps, { receiveCreatedCart })(Cart);
