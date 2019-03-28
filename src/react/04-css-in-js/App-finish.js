import React from 'react';

import CardContainer from './finish/CardContainer';
import CardHeader from './finish/CardHeader';
import CardContent from './finish/CardContent';
import Image from './finish/Image';
import { Heading } from './finish/Typography';
import CardFooter from './finish/CardFooter';
import Button from './finish/Button';

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
      <Button type="button" variant="outline">
        Share
      </Button>
    </CardFooter>
  </CardContainer>
);

export default Card;
