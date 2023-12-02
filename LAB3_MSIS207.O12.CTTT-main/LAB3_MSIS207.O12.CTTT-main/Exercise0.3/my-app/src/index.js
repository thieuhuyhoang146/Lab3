import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.js';
import MySection from './MySection';
import MyButton from './MyButton';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
);

reportWebVitals();
