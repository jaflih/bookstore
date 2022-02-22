import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BooksContainer from './pages/BooksContainer';
import Categories from './components/Categories';
import Header from './components/Header';
import store from './redux/configureStore';

export default function App() {
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
