import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './components/Home/Home1';
import About1 from './components/About/About1';
import Register1 from './components/Register/Register1';
import Login1 from './components/Login/Login1';
import Support1 from './components/Support/Support1';
import Visit1 from './components/Visit/Visit1';
import TouristSpot1 from './components/TouristSpot/TouristSpot1';
import Stay1 from './components/Stay/Stay1';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/visit" element={<Visit1 />} />
      <Route path="/about" element={<About1 />} />
      <Route path="/register" element={<Register1 />} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/support" element={<Support1 />} />
      <Route path="/visit/touristspot" element={<TouristSpot1 />} />
      <Route path="/visit/stay" element={<Stay1 />} />
    </Routes>
  </Router>
);

export default App;


