import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function Form() {
  const [idBook, setIdBook] = useState(0);
  const [titleBook, setTitleBook] = useState('');
  const [categoryBook, setCategoryBook] = useState('Action');

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    setIdBook(idBook + 1);
    const newBook = {
      id: idBook,
      title: titleBook,
      category: categoryBook,
      author: 'Suzanne Test',
      completed: 64,
      currentChapter: 17,
      currentChapterTitle: '',
    };
    setTitleBook('');
    setCategoryBook('Action');

    dispatch(addBook(newBook));
  };

  const onChange = (e) => {
    setTitleBook(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategoryBook(e.target.value);
  };

  return (
    <>
      <h2>Add new Book</h2>
      <form>
        <input type="text" placeholder="Book title" value={titleBook} onChange={onChange} />
        <select value={categoryBook} onChange={handleChangeCategory}>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>
          Add Book
        </button>
      </form>
    </>
  );
}
