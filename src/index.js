import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import '../node_modules/normalize.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);
