
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Men from './page/Men';
import T_shirt from './page/T_shirt';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/t_shirt" element={<T_shirt/>} />
        
      </Routes>
    </Router>
  );
};

export default App;