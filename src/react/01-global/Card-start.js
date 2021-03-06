import React from 'react';

const Card = () => (
  <div className="card">
    <div className="card__header">
      <h1 className="card__title">ReactJS Meetup v11</h1>
      <p>
        <small>March 28, 2019</small>
      </p>
    </div>
    <div className="card__content">
      <img
        alt="meetup banner"
        src="https://secure.meetupstatic.com/photos/event/4/d/4/c/highres_475699788.jpeg"
      />
      <p>
        Death by 1,000 selectors: Why your web app's styles are an
        unmaintainable mess with Bogdan Lazar (twitter:{' '}
        <a href="https://twitter.com/tricinel">@tricinel</a>)
      </p>
    </div>
    <div className="card__footer">
      <button className="btn" type="button">
        Join
      </button>
      <button className="btn btn--outline" type="button">
        Share
      </button>
    </div>
  </div>
);

export default Card;
