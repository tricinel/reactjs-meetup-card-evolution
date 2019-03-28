import { css } from '@emotion/core';
import styled from '@emotion/styled';

const buttonVars = props =>
  css`
    --bg-color: ${props.variant === 'outline'
      ? 'transparent'
      : 'var(--button-bg-color)'};
    --color: ${props.variant === 'outline'
      ? 'var(--button-bg-color)'
      : 'var(--button-color)'};
  `;

const Button = styled.button`
  ${buttonVars};

  background-color: var(--bg-color);
  border: 1px solid var(--button-bg-color);
  color: var(--color);
  cursor: pointer;
  flex: 0 0 var(--flex-size);
  font-size: calc(var(--button-font-size) * 1em);
  font-weight: 300;
  padding: calc(var(--gutter) / 4) calc(var(--gutter) * 1.5);
`;

export default Button;
