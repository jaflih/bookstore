import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  const handleClick = (event, idBook) => {
    event.preventDefault();
    dispatch(removeBook(idBook));
  };

  return (
    <div className="book-container">
      <div>
        <div className="book-category">{book.category}</div>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
        <div className="book-panel">
          <span className="bg-right">Comments</span>
          <button type="button" onClick={(event) => handleClick(event, book.item_id)} className="bg-right button">
            Remove
          </button>
          <span>Edit</span>
        </div>
      </div>

      <div className="book-completed">
        <div className="book-completed-image">
          <div className="oval-2" />
        </div>
        <div className="book-completed-value">
          80%
          <span>completed</span>
        </div>
      </div>

      <div className="book-current">
        <div className="book-current-chapter">Current Chapter</div>
        <div className="book-current-chapter-2">Chapter 3: A Lesson Learned</div>
        <div className="book-current-chapter-3">UPDATE PROGRESS</div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any),
};

Book.defaultProps = {
  book: {},
};
