import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookDetails = () => {
  const { books } = useContext(BookContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
