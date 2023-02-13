import React from 'react';                     // React is a main package.
import ReactDOM from 'react-dom/client';       // ReactDOM is one that help to display/render the content.
import App from './component/App';           
const container = document.getElementById('root');       // The root element is from the ./public/index,js 
const root = ReactDOM.createRoot(container);
root.render(<App/>);                                  // Helps to render the content in App.js