import React, { createContext, useReducer } from "react";
import Modal from "../../components/Modals&Spinners/BasicModal";
import { modalReducer, initialState } from "./reducer";
let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const { modalType, modalProps } = state;

  return (
    <Provider value={{ modalType, modalProps, dispatch }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
