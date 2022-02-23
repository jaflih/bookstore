import { URL, JSON_HEADER } from '../../datas/api';

export const ADD_BOOK_ACTION = 'ADD_BOOK_ACTION';
export const REMOVE_BOOK_ACTION = 'REMOVE_BOOK_ACTION';
export const GET_BOOKS_ACTION = 'GET_BOOKS_ACTION';

const initialState = [];

export const addBook = (book) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify(book),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: ADD_BOOK_ACTION, payload: book }),
      () => dispatch({ type: ADD_BOOK_ACTION, payload: null }),
    );
};

export const removeBook = (bookId) => async (dispatch) => {
  await fetch(`${URL}/${bookId}`, {
    method: 'DELETE',
    headers: JSON_HEADER,
    body: JSON.stringify({ item_id: bookId }),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: REMOVE_BOOK_ACTION, payload: bookId }),
      () => dispatch({ type: REMOVE_BOOK_ACTION, payload: null }),
    );
};

export const getBooks = () => async (dispatch) => {
  await fetch(URL)
    .then((books) => books.json())
    .then(
      (data) => dispatch({ type: GET_BOOKS_ACTION, payload: data }),
      () => dispatch({ type: GET_BOOKS_ACTION, payload: [] }),
    );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_ACTION:
      return [...state, action.payload];
    case REMOVE_BOOK_ACTION:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOKS_ACTION: {
      const bookList = [];
      Object.keys(action.payload).forEach((key) => {
        const book = action.payload[key][0];
        book.item_id = key;
        book.author = 'Suzanne Collins';
        book.completed = 80;
        bookList.push(book);
      });
      return bookList;
    }
    default:
      return state;
  }
};

export default reducer;
