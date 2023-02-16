import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    inputBorder: string;
    border: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
