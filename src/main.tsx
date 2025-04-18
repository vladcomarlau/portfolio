import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './assets/fonts/SpecialGothicExpandedOne-Regular.ttf';
import './assets/fonts/CinzelDecorative-Regular.ttf';
import './assets/fonts/CinzelDecorative-Bold.ttf';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
