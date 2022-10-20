import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-family: inherit;
  font-size: 14px;
  background-color: ${({ variant }) =>
    variant === 'active' ? '#80ff72' : '#ff8772'};
  color: black;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 150ms linear;
`;

export default Button;
