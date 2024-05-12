import React from 'react';
import Navigation from './components/Navigation';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to='/'>My Personal Notes F1</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archive' element={<ArchivePage />} />
          <Route path='/notes/new' element={<AddPage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
          <Route path='/notes/:id/edit' element={<EditPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <hr/>
        <p>Dicoding Submission - Belajar Fundamental Aplikasi Web dengan React &#169; 2024, Finzhark</p>
      </footer>
    </div>
  );
}

export default App