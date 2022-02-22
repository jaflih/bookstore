import { Routes, Route } from 'react-router-dom';
import BooksContainer from './pages/BooksContainer';
import Categories from './components/Categories';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
