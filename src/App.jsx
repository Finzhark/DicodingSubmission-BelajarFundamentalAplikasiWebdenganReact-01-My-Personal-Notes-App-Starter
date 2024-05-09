import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

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
        </Routes>
      </main>
    </div>
  );
}

export default App;