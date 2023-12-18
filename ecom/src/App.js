
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Men from './page/Men';
import T_shirt from './page/T_shirt';
import AddProduct from './Admin/AddProduct';
import Dashboard from './Admin/Dashboard';
import Productadd from './Admin/Productadd';
import Show from './Admin/Show';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/t_shirt" element={<T_shirt/>} />
        <Route path="/admin" element={<AddProduct/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/product" element={<Productadd/>} />
        <Route path="/admin/show" element={<Show/>} />
        
      </Routes>
    </Router>
  );
};

export default App;