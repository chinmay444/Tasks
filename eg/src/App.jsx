import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookProvider from './context/BookContext';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
