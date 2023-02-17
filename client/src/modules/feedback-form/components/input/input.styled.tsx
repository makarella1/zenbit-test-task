import styled from 'styled-components';
import { InputProps } from '.';

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: 1px solid
    ${(props) => (props.error ? 'red' : props.theme.inputBorder)};
  border-radius: 10px;
  padding: 30px 45px;
  font-size: 16px;

  color: ${(props) => props.error && 'red'};

  :focus {
    border: 1px solid ${(props) => (props.error ? 'red' : 'black')};
  }

  ::placeholder {
    color: ${(props) => props.error && 'red'};
  }
`;

export const InputError = styled.div`
  color: red;
`;
