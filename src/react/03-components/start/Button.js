import React from 'react';

const Button = ({ children, style, props }) => (
  <button {...props} style={{ ...styles, ...style }}>
    {children}
  </button>
);

const styles = {};

export default Button;
