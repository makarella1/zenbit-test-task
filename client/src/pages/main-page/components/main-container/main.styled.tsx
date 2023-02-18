import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;

  padding-top: 80px;
  padding-left: 150px;

  @media screen and (max-width: 1120px) {
    margin: 0 auto;
    padding-left: 0;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    padding-top: 50px;
  }
`;
