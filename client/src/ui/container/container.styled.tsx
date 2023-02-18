import styled from 'styled-components';

export const Smile = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 2;
`;

export const FirstSmallYellowSmile = styled(Smile)`
  @media screen and (max-width: 568px) {
    display: none;
  }
`;

export const SecondSmallYellowSmile = styled(Smile)`
  bottom: 0;
  transform: translateX(95%);

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const FirstPinkSmile = styled(Smile)`
  transform: translateY(240%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SecondPinkSmile = styled(Smile)`
  transform: translateX(65%) translateY(140%);

  @media screen and (max-width: 1400px) {
    transform: translateX(65%) translateY(100%);
  }

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const BigYellowSmile = styled(Smile)`
  transform: translateX(65%) translateY(300%);

  @media screen and (max-width: 1400px) {
    transform: translateX(65%) translateY(200%);
  }

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const StyledGreenSmile = styled(Smile)`
  bottom: 0;
  transform: translateX(85%) translateY(-66%);
`;

export const StyledContainer = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
`;
