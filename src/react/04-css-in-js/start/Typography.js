import React from 'react';

const Heading = ({ children }) => <h1 style={styles.title}>{children}</h1>;

const styles = {
  title: {
    color: 'var(--h1-color)',
    fontSize: 'calc(var(--h1-font-size) * 1em)',
    fontWeight: 900,
    margin: 'calc(var(--gutter) / 4) 0',
    padding: 0
  }
};

export { Heading };
