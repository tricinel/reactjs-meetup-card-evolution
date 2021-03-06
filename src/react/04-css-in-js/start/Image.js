import React from 'react';

const Image = ({ alt = '', src }) => <img style={styles} src={src} alt={alt} />;

const styles = {
  maxWidth: '100%',
  verticalAlign: 'middle'
};

export default Image;
