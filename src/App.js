
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';    
import About from './About';
import Creativeworks from './Creativeworks';
import ThirstyLion from './ThirstyLion';
import Sharp from './Sharp2';
import Miai from './Miai2';
import Alterea from './Alterea2';
import Techspace from './Techspace';
import ThirstyLion2 from './ThirstyLion2';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;


