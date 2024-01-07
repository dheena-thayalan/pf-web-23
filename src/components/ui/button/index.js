/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */

import React from "react";

const Button = ({ onClick, label, type, className }) => {
  return (
    <button className={`${className} c-btn`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
