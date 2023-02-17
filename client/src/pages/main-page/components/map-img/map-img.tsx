import styled from 'styled-components';

export const MapImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(20%) translateY(-10%);
  width: 800px;
  height: 800px;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
