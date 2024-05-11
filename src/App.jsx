import React from 'react';
import Navigation from './components/Navigation';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
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
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;