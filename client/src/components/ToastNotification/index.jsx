import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { SideAnimation } from "../../utils/baseStyleAnimations";
import { resetNotification } from ".././../redux/notification/actions";

import { StyledNotification } from "./styledComponents";

const ToastNotification = ({ message, msgType, resetNotification }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message) {
      handlerOpenToast();
      const closeMessage = setTimeout(() => {
        setIsOpen(false);
        resetNotification();
      }, 5000);

      return () => {
        clearTimeout(closeMessage);
      };
    }
  }, [message, resetNotification]);
  const handleClick = () => {
    setIsOpen(false);
  };

  const handlerOpenToast = () => {
    setTimeout(() => {
      setIsOpen(true);
    });
  };

  return isOpen
    ? ReactDOM.createPortal(
        <SideAnimation
          duration="1.5s"
          delay="0.3s"
          position="absolute"
          right="0%"
          width="28rem"
          top="2%"
          height="10%"
        >
          <StyledNotification type={msgType}>
            {message}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={handleClick}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </StyledNotification>
        </SideAnimation>,
        document.getElementById("toast-notificacion-root")
      )
    : null;
};

export const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
    msgType: state.notification.msgType,
  };
};
export const mapDispatchToProps = {
  resetNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastNotification);