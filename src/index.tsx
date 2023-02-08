import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Style } from './assets/style/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Style/>
    <App />
  </React.StrictMode>
);