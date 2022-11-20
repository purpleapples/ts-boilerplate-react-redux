import * as React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './config/store';
import styles from './index.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
const root = createRoot(document.getElementById('root'));
console.log('start');
console.log(styles.html);
root.render(  
  <Provider store={store}>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </Provider>
);
