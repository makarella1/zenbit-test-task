import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ApercuArabicPro';
    src: url('../../../../public/ApercuArabicPro-Regular.woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ApercuArabicPro';
    src: url('../../../../public/ApercuArabicPro-Medium.woff2');
    font-weight: 500;
    font-style: normal;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    outline: 0;
    font-family: 'ApercuArabicPro';
  }

  body, 
  #root {
    overflow: hidden;
    
    width: 100%;
    height: 100%;
  }
`;
