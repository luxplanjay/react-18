import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthorBooks;
