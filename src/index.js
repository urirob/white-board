import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToolboxProvider } from './store/toolbox-context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <ToolboxProvider>
        <App />
    </ToolboxProvider>
        
    

);
