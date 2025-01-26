import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import NoPage from './NoPage.jsx';
import Contact from '../components/Contact.jsx';
import Navbar from '../components/Navbar.jsx';
import Course from '../components/Course.jsx';
import Learning from '../pages/Learning.jsx';
import About from '../components/About.jsx';
const RootComponent = () => {
  const location = useLocation();

  return (
    <StrictMode>
      
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Course" element={<Course/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/:course" element={<Learning/>} />
        
        </Routes>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Navbar />
    <RootComponent />
  </BrowserRouter>
);
