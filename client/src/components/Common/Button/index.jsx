import React, { Children } from "react";
import styled from "styled-components";
import { space } from "styled-system";

const StyledButton = styled.button`
  ${space}
  background-color: var(--main);
  color: white;
  border-radius: 8px;
  border: 2px solid var(--secondary);
  padding: 0.5rem 2rem;
  cursor: pointer;
  &:disabled {
    background-color: var(--disabled);
    border-color: black;
    cursor: normal;
  }
`;

function Button({ children, ...args }) {
  return <StyledButton {...args}>{children}</StyledButton>;
}

export default Button;
