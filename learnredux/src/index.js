import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import storage from './Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storage}>
    <App />
  </Provider>
);

