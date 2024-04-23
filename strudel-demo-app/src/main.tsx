import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// TODO: might need to move this into the useDataFromSource hook
export const basename = document.querySelector('base')?.getAttribute('href') ?? '';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
