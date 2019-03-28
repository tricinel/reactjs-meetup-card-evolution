import styled from '@emotion/styled';

const CardContainer = styled.div`
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
  padding: calc(var(--gutter) / 2) var(--gutter);
  max-width: 24em;
  width: calc(100% - calc(var(--gutter) * 2));
`;

export default CardContainer;
