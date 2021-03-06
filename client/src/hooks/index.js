import { useState, useEffect, useReducer } from "react";

export const useCart = (productsToCart, receiveCreatedCart) => {
  const setToCart = (product) => {
    let storedProduct = productsToCart.filter(
      (productInCart) => productInCart.product.id === product.id
    );
    if (!productsToCart.length) {
      let productToCart = {
        name: product.name,
        img: product.img1,
        product: product,
        quantity: 1,
        total: product.price,
      };

      receiveCreatedCart([productToCart]);
    } else {
      if (storedProduct.length) {
        let productsToCartCopy = productsToCart.map((productInCart) => {
          if (productInCart.product.id === product.id) {
            productInCart = {
              name: productInCart.product.name,
              img: productInCart.product.img1,
              product: productInCart.product,
              quantity: productInCart.quantity + 1,
              total: productInCart.total + product.price,
            };
          }
          return productInCart;
        });
        receiveCreatedCart(productsToCartCopy);
      } else {
        let productToCart = {
          name: product.name,
          img: product.img1,
          product: product,
          quantity: 1,
          total: product.price,
        };
        receiveCreatedCart([...productsToCart, productToCart]);
      }
    }
  };

  const removeFromCart = (product) => {
    let newStoredProduct = productsToCart.filter(
      (productInCart) => productInCart.product.id !== product.id
    );
    receiveCreatedCart(newStoredProduct);
  };

  const deleteFromCart = (product) => {
    let newStoredProduct = productsToCart.filter(
      (productInCart) => productInCart.product.id !== product.product.id
    );

    receiveCreatedCart(newStoredProduct);
  };

  return { setToCart, deleteFromCart, removeFromCart };
};

export const useModal = (state, trigger, path, history) => {

  // const [state, dispatch] = useReducer(exampleReducer, {
  //   open: false,
  //   size: undefined,
  // })
  // const { open, size } = state
  let [showModal, setShowModal] = useState(state);
  let [showRegularModal, setShowRegularModal] = useState(state);
  let [modalContent, setModalContent] = useState("");

  useEffect(() => {
    trigger && setShowModal(true);
  }, [trigger]);

  const hideModal = () => {
    setShowModal(false);
  };
  const onConfirmRedirect = () => {
    history.push(path);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  let handleModal = (content = false) => {
    setShowModal(!showModal);
    if (content) {
      setModalContent(content);
    }
  };

  return {
    showModal,
    setShowModal,
    hideModal,
    onConfirmRedirect,
    openModal,
    toggleModal,
    showRegularModal,
    setShowRegularModal,
    handleModal,
    modalContent,
  };
};
