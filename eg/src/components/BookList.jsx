import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { books, addBook } = useContext(BookContext);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newBook);
    setNewBook({ title: '', author: '', description: '' });
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newBook.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookList;
