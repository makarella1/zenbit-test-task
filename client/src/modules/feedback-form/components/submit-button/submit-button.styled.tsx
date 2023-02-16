import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  padding: 22px 52px;
  border-radius: 50px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;

  display: inline;

  transition: color 0.1s ease-in-out;

  align-self: flex-start;

  :hover {
    color: black;
  }
`;
