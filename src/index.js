import React from 'react';
import App from './App'; // Update the path if necessary
import { createRoot } from 'react-dom'; // Import createRoot
import ReactDOM from 'react-dom';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);