import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function Books() {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="books-container">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
}
