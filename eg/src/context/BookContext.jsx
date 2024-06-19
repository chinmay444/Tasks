import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'ABC', description: 'Social science fiction novel.' },
    { id: 2, title: 'XYZ', author: 'Lee', description: 'Novel about injustice.' },
    { id: 3, title: 'UVW', author: 'LOAA', description: 'Novel about the Dream.' }
  ]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, { id: prevBooks.length + 1, ...book }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
