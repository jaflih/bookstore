import React from 'react';
import booksList from '../datas/BooksList';
import Book from './Book';

export default function Books() {
  return (
    <div className="books-container">
      {booksList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}
