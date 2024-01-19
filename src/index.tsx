import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.module.scss';
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>{router}</BrowserRouter>
  </React.StrictMode>
);
