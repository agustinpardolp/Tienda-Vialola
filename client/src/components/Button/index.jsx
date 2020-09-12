import React from "react";

const Button = ({ label, className, onClick }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {label} <i className="fa fa-chevron-right"></i>
    </button>
  );
};

export default Button;
