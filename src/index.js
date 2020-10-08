import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './utilities/global';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
