import React from 'react';

import CardContainer from './start/CardContainer';
import CardHeader from './start/CardHeader';
import CardContent from './start/CardContent';
import Image from './start/Image';
import { Heading } from './start/Typography';
import CardFooter from './start/CardFooter';
import Button from './start/Button';

const Card = () => (
  <CardContainer>
    <CardHeader>
      <Heading>ReactJS Meetup v11</Heading>
      <p>
        <small>March 28, 2019</small>
      </p>
    </CardHeader>
    <CardContent>
      <Image
        alt="meetup banner"
        src="https://secure.meetupstatic.com/photos/event/4/d/4/c/highres_475699788.jpeg"
      />
      <p>
        Death by 1,000 selectors: Why your web app's styles are an
        unmaintainable mess with Bogdan Lazar (twitter:{' '}
        <a href="https://twitter.com/tricinel">@tricinel</a>)
      </p>
    </CardContent>
    <CardFooter>
      <Button type="button">Join</Button>
      <Button
        style={{ ...styles.button.outline, ...styles.button.footer }}
        type="button"
      >
        Share
      </Button>
    </CardFooter>
  </CardContainer>
);

const styles = {
  button: {
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
