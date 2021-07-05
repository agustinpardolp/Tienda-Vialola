import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import ErrorMessage from "../ErrorMessage";
import { StyledTextArea } from "./styled-components";

const TextArea = ({
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
  style,
  checked,
  width,
}) => {
  const intl = useIntl();
  return (
    <>
      <StyledTextArea
        type={type}
        className="text_area"
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
TextArea.propTypes = {
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
export default TextArea;
