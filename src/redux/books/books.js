export const ADD_BOOK_ACTION = 'ADD_BOOK_ACTION';
export const REMOVE_BOOK_ACTION = 'REMOVE_BOOK_ACTION';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK_ACTION,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK_ACTION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_ACTION:
      return [...state, action.payload];
    case REMOVE_BOOK_ACTION:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
