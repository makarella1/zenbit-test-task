import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 125px;
  width: 100%;

  position: fixed;
  bottom: 0;

  border-top: 1px solid ${(props) => props.theme.border};
`;

export const Links = styled.div`
  width: 135px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 345px;

  z-index: 10;

  @media screen and (max-width: 1120px) {
    margin: 40px auto;
  }
`;
