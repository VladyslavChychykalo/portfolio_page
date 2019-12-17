// import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 50px;
  border: 0;
  background-color: transparent;
  color: ${props => props.color};
  cursor: pointer;
  outline: 0;
  font-size: 40px;
  transition: color 200ms linear;

  &:hover {
    color: #2196f3;
  }
`;

export default Button;
