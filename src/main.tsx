import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './gloabalStyle.ts';
import { ConfigProvider } from 'antd';
import { theme } from './config/theme.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
