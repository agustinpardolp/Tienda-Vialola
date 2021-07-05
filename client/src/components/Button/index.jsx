import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { StyledButton } from "./styled-components";
const Button = ({ label, onClick, variant, type }) => {
  const handleVariant = (variant) => {
    let settings = {
      borderColor: "none",
      fontColor: "var(--gray)",
      backgroundColor: "none",
      disabled: false,
    };
    console.log(variant)
    switch (variant) {
      case "confirm":
        settings = {
          borderColor: "var(--primaryConfirm)",
          fontColor: "white",
          backgroundColor: "var(--primaryConfirm)",
          disabled: false,
        };
        break;
      case "cancel":
        settings = {
          borderColor: "var(--primaryCancel)",
          fontColor: "white",
          backgroundColor: "var(--primaryCancel)",
          disabled: false,
        };
        break;
      case "neutral":
        settings = {
          borderColor: "none",
          fontColor: "var(--primaryConfirm)",
          backgroundColor: "none",
          disabled: false,
        };
        break;
      case "neutralDisabled":
        settings = {
          borderColor: "none",
          fontColor: "var(--gray)",
          backgroundColor: "none",
          disabled: true,
          cursor:"not-allowed"
        };
        break;
      case "disabled":
        settings = {
          borderColor: "var(--gray)",
          fontColor: "white",
          disabled: true,
          backgroundColor: "var(--gray)",
        };
        break;
      case "login":
        settings = {
          borderColor: "var(--primary)",
          fontColor: "var(--primary)",
          backgroundColor: "white",
          disabled: false,
        };
        break;
      case "logout":
        settings = {
          borderColor: "var(--gray)",
          fontColor: "var(--gray)",
          backgroundColor: "white",
          disabled: false,
        };
        break;
      default:
        return settings;
    }

    return settings;
  };
  let buttonSetup = handleVariant(variant);
  return (
    <StyledButton
      onClick={onClick}
      borderColor={buttonSetup.borderColor}
      fontColor={buttonSetup.fontColor}
      backgroundColor={buttonSetup.backgroundColor}
      type={type}
      disabled={buttonSetup.disabled}
      cursor={buttonSetup.cursor}
    >
      <span>
        <FormattedMessage id={label} />
      </span>
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
