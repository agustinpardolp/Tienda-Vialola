import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import ErrorMessage from "../../components/ErrorMessage";
import { StyledInput } from "./styled-components";

const Input = ({
  values,
  errors,
  label,
  handleChange,
  handleClick,
  handleBlur,
  touched,
  type,
  id,
  placeholder,
  name,
  tabIndex,
  disableErrors,
  style,
  checked,
  width,
}) => {
  const intl = useIntl();
  return (
    <>
      <StyledInput
        type={type}
        className="input"
        label={label}
        placeholder={intl.formatMessage({ id: placeholder })}
        width={width}
        id={id}
        value={values}
        name={name}
        style={style}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleClick}
        tabIndex={tabIndex}
        error={!!errors}
        checked={checked}
      />
    </>
  );
};
Input.propTypes = {
  values: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.string,
  touched: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.string,
  disableErrors: PropTypes.bool,
  disableLabel: PropTypes.bool,
  style: PropTypes.object,
  iconIsActive: PropTypes.bool,
  iconClass: PropTypes.string,
  iconType: PropTypes.object,
  checked: PropTypes.bool,
};
export default Input;
