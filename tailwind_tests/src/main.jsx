import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Colors  from "./colors.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Colors />
  </StrictMode>,
)
