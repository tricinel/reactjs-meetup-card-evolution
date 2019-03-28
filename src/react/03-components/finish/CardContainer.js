import React from 'react';

const CardContainer = ({ children }) => <div style={styles}>{children}</div>;

const styles = {
  backgroundColor: 'var(--card-bg-color)',
  border: '1px solid var(--card-border-color)',
  borderRadius: '4px',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
  padding: 'calc(var(--gutter) / 2) var(--gutter)',
  maxWidth: '24em',
  width: 'calc(100% - calc(var(--gutter) * 2))'
};

export default CardContainer;
