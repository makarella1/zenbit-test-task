import styled from 'styled-components';

export const StyledFeedbackForm = styled.form`
  width: 565px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1120px) {
    margin: 0 auto;
    padding: 0 10px;
  }
`;
