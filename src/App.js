
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';    
import About from './About';
import Creativeworks from './Creativeworks';
import ThirstyLion from './ThirstyLion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creativeworks" element={<Creativeworks />} />
        <Route path="/about" element={<About />} />
        <Route path="/thirstylion" element={<ThirstyLion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


