import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './component/Routing';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Routing/>)


// Routing - When we have more than one component, we need Routing.
// Everything happens in Routing.js file