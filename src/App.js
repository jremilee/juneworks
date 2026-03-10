
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';    
import About from './About';
import Creativeworks from './Creativeworks';
import ThirstyLion from './ThirstyLion';
import Sharp from './Sharp2';
import Miai from './Miai2';
import Alterea from './Alterea2';
import Techspace from './Savo';
import ThirstyLion2 from './ThirstyLion2';

function AppRoutes() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  useEffect(() => {
    const isThirstyLion2 = location.pathname === '/thirstylion2';
    document.body.classList.toggle('site-typography', !isThirstyLion2);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/creativeworks" element={<Creativeworks />} />
      <Route path="/about" element={<About />} />
      <Route path="/thirstylion" element={<ThirstyLion />} />
      <Route path="/sharp" element={<Sharp />} />
      <Route path="/miai" element={<Miai />} />
      <Route path="/alterea" element={<Alterea />} />
      <Route path="/techspace" element={<Techspace />} />
      <Route path="/thirstylion2" element={<ThirstyLion2 />} />
    </Routes>
  );
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;


