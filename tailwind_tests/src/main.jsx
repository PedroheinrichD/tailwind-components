import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Estudos from "./Estudos.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Estudos />
  </StrictMode>,
)
