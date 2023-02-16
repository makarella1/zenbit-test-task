import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  border: '#D8D8D8',
  inputBorder: '#DCDCDC',
  colors: {
    main: '#FAD34F',
    secondary: '#F472B7',
  },
};

export const Theme = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
