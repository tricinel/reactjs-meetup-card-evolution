import React from 'react';

const CardFooter = ({ children }) => <div style={styles}>{children}</div>;

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
};

export default CardFooter;
