import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { AudioProvider } from './components/AudioProvider'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/website-portfolio-rikosg/">
    <AudioProvider>
      <App />
    </AudioProvider>
  </BrowserRouter>
)
