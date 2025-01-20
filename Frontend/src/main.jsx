import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import NoPage from './NoPage.jsx';
import Learning from '../pages/Learning.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <Routes>
    <Route path="*" element={<NoPage />} />
    <Route path="/" element={<App />} />
    <Route path="/learn" element={<Learning />} />
  </Routes>
</BrowserRouter>
  </StrictMode>,
)
