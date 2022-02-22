import React from 'react';
import Books from '../components/Books';
import Form from '../components/Form';

export default function BooksContainer() {
  return (
    <section className="books-container">
      <Books />
      <Form />
    </section>
  );
}
