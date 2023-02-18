import styled from 'styled-components';

export const SuccessContainer = styled.div`
  width: 565px;
  height: 530px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 100%;

  @media screen and (max-width: 1120px) {
    margin: 0 auto;
  }
`;

export const SuccessText = styled.p`
  margin: auto;
  font-weight: 500;

  font-size: 44px;

  color: green;
`;
