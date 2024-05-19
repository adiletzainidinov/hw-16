import React from 'react';
import { styled } from 'styled-components';

const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 10px 25px;
  color: white;
  background-color: #6a6aef;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  &:hover {
    background-color: #9a9afd;
  }
  &:active {
    background-color: #1c1cfa;
  }
`;
