import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import NoPage from './NoPage.jsx';
import Learning from '../pages/Learning.jsx';
import { AnimatePresence } from 'framer-motion';

const RootComponent = () => {
  const location = useLocation();

  return (
    <StrictMode>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<App />} />
          <Route path="/learn" element={<Learning />} />
        </Routes>
      </AnimatePresence>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RootComponent />
  </BrowserRouter>
);
