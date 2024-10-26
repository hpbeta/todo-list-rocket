import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { GlobalStyles } from './globalStyles/globalStyle.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
