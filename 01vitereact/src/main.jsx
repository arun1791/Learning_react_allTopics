import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Atta from './Atta.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Atta />
  </StrictMode>
)
