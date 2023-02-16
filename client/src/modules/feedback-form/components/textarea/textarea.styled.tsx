import styled from 'styled-components';
import { TextareaProps } from '.';

export const StyledTextarea = styled.textarea<TextareaProps>`
  width: 100%;
  border: ${(props) =>
    `1px solid ${props.error ? 'red' : props.theme.inputBorder}`};
  border-radius: 10px;
  padding: 30px 45px;
  font-size: 16px;
  height: 190px;

  color: ${(props) => (props.error ? 'red' : 'black')};

  :focus {
    border: ${(props) => `1px solid ${props.error ? 'red' : 'black'}`};
  }

  ::placeholder {
    color: ${(props) => props.error && 'red'};
  }
`;

export const TextareaError = styled.div`
  color: red;
`;
