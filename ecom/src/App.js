
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Men from './page/Men';
import T_shirt from './page/T_shirt';
import AddProduct from './Admin/AddProduct';
import Dashboard from './Admin/Dashboard';
import EditProduct from './Admin/Edit';
import Catalog from './components/Catalog/Catalog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/t_shirt" element={<T_shirt/>} />
        <Route path="/admin/addproduct" element={<AddProduct/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/dashboard/edit/:id" element={<EditProduct/>} />
        <Route path="/catalog" element={<Catalog/>} />
        
      </Routes>
    </Router>
  );
};

export default App;