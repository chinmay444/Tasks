import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/store';
import HomePage from './pages/HomePage';
import JobDetailsPage from './pages/JobDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
