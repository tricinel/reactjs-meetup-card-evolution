import styled from '@emotion/styled';

const Heading = styled.h1`
  --h1-font-size: 1.16;

  color: var(--h1-color);
  font-size: calc(var(--h1-font-size) * 1em);
  font-weight: 900;
  margin: calc(var(--gutter) / 4) 0;
  padding: 0;

  @media screen and (min-width: 60em) {
    --h1-font-size: 2;
  }
`;

export { Heading };
