import React from 'react';

const Card = () => (
  <div style={styles.card}>
    <div style={styles.header}>
      <h1 style={styles.title}>ReactJS Meetup v11</h1>
      <p style={styles.p}>
        <small style={styles.small}>March 28, 2019</small>
      </p>
    </div>
    <div style={styles.content}>
      <img
        style={styles.img}
        alt="meetup banner"
        src="https://secure.meetupstatic.com/photos/event/4/d/4/c/highres_475699788.jpeg"
      />
      <p style={styles.p}>
        Death by 1,000 selectors: Why your web app's styles are an
        unmaintainable mess with Bogdan Lazar (twitter:{' '}
        <a href="https://twitter.com/tricinel">@tricinel</a>)
      </p>
    </div>
    <div style={styles.footer}>
      <button style={styles.button.regular} type="button">
        Join
      </button>
      <button
        style={{
          ...styles.button.regular,
          ...styles.button.outline,
          ...styles.button.footer
        }}
        type="button"
      >
        Share
      </button>
    </div>
  </div>
);

const styles = {
  card: {
    backgroundColor: 'var(--card-bg-color)',
    border: '1px solid var(--card-border-color)',
    borderRadius: '4px',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
    padding: 'calc(var(--gutter) / 2) var(--gutter)',
    maxWidth: '24em',
    width: '100%'
  },
  header: {},
  title: {
    color: 'var(--h1-color)',
    fontSize: 'calc(var(--h1-font-size) * 1em)',
    fontWeight: 900,
    margin: 'calc(var(--gutter) / 4) 0',
    padding: 0
  },
  content: {},
  p: {
    color: 'var(--p-color)',
    fontSize: 'calc(var(--p-font-size) * 1em)',
    fontWeight: 400,
    lineHeight: 'var(--p-line-height)',
    margin: 'calc(var(--gutter) / 2) 0',
    padding: 0
  },
  small: {
    color: 'var(--small-color)',
    fontSize: 'calc(var(--small-font-size) * 1em)',
    fontWeight: 300
  },
  img: {
    maxWidth: '100%',
    verticalAlign: 'middle'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    regular: {
      backgroundColor: 'var(--button-bg-color)',
      border: '1px solid var(--button-bg-color)',
      color: 'var(--button-color)',
      cursor: 'pointer',
      fontSize: 'calc(var(--button-font-size) * 1em)',
      fontWeight: 300,
      padding: 'calc(var(--gutter) / 4) calc(var(--gutter) * 1.5)'
    },
    outline: {
      border: '1px solid var(--button-bg-color)',
      backgroundColor: 'transparent',
      color: 'var(--button-bg-color)'
    },
    footer: {
      flex: '0 0 40%'
    }
  }
};

export default Card;
