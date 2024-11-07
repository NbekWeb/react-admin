import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';
import './adaptive.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <BrowserRouter>  
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
