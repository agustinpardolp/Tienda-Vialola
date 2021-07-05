import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import ErrorMessage from "../../components/ErrorMessage";
import { StyledSelect } from "./styled-components";

const Select = ({
  values,
  errors,
  label,
  handleChange,
  handleBlur,
  touched,
  id,
  placeholder,
  name,
  disableErrors,
  width,
  options,
}) => {
  const intl = useIntl();

  return (
    <>
      <StyledSelect
        placeholder={intl.formatMessage({ id: placeholder })}
        options={options}
        label={label}
        width={width}
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors}
      />
    </>
  );
};
Select.propTypes = {
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
export default Select;
