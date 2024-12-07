import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Landing from './pages/Landing.jsx'
import Nobels from './pages/Nobels.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Landing />
    <Nobels/>
  </StrictMode>,
)
