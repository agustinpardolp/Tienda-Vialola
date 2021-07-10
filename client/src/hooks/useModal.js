import { useState, useEffect } from "react";

export const useModal = (state, trigger, path, history) => {
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
