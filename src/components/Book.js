import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

export default function Book({ book }) {
  const style = {
    border: '1px solid black',
    display: 'flex',
  };

  const dispatch = useDispatch();

  const handleClick = (event, idBook) => {
    event.preventDefault();
    dispatch(removeBook(idBook));
  };

  return (
    <div className="book-container" style={style}>
      <div>
        <div className="book-category">{book.category}</div>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </div>

      <div>
        <div className="book-completed-image">O</div>
        <div className="book-completed">{book.completed}</div>
        <div className="book-completed-prefix">completed</div>
      </div>

      <div>
        <div className="book-current-chapter">Current Chapter</div>
        <div className="book-current-chapter">
          Chapter
          {book.currentChapter}
          <span className="book-current-chapter-title">{book.currentChapterTitle}</span>
        </div>
      </div>

      <div>
        <button type="button" onClick={(event) => handleClick(event, book.item_id)}>
          Remove
        </button>
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
