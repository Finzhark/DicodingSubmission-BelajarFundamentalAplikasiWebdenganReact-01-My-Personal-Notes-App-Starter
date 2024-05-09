import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NoteAddPage from './pages/NoteAddPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">
            My Personal Notes F1
          </Link>
        </h1>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes/new" element={<NoteAddPage />} />
          <Route path="/notes:id" element={<NoteDetailPage />} />
          {/* <Route path="/notes:id/edit" element={<NoteEditPage />} /> */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;