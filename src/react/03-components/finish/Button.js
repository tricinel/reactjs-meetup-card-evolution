import React from 'react';

const Button = ({ children, style, props }) => (
  <button {...props} style={{ ...styles, ...style }}>
    {children}
  </button>
);

const styles = {
  backgroundColor: 'var(--button-bg-color)',
  border: '1px solid var(--button-bg-color)',
  color: 'var(--button-color)',
  cursor: 'pointer',
  fontSize: 'calc(var(--button-font-size) * 1em)',
  fontWeight: 300,
  padding: 'calc(var(--gutter) / 4) calc(var(--gutter) * 1.5)'
};

export default Button;
