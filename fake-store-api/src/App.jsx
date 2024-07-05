import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Fake Store
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
