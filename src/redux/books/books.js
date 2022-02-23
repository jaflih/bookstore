export const ADD_BOOK_ACTION = 'ADD_BOOK_ACTION';
export const REMOVE_BOOK_ACTION = 'REMOVE_BOOK_ACTION';
export const GET_BOOKS_ACTION = 'GET_BOOKS_ACTION';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK_ACTION,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK_ACTION,
  payload,
});

export const getBooks = () => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1jamYE0q21KGJDxY2H1v/books')
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
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS_ACTION: {
      const bookList = [];
      Object.keys(action.payload).forEach((key) => {
        const book = action.payload[key][0];
        book.item_id = key;
        bookList.push(book);
      });
      return bookList;
    }
    default:
      return state;
  }
};

export default reducer;
