import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BooksContainer from './pages/BooksContainer';
import Categories from './components/Categories';
import Header from './components/Header';
import store from './redux/configureStore';
import { getBooks } from './redux/books/books';

export default function App() {
  store.dispatch(getBooks());

  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}
