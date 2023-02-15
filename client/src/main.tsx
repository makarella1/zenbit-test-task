import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyles, Theme } from '@/ui/config';
import { Container } from '@/ui/container';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <Theme>
        <Container>
          <App />
        </Container>
      </Theme>
    </>
  </React.StrictMode>,
);
