import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UsersList from './components/UsersList/UsersList';
import AlbumsList from './components/AlbumsList/AlbumsList';
import PhotosList from './components/PhotosList/PhotosList';

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/:userId/albums" element={<AlbumsList />} />
          <Route path="/:userId/albums/:albumId/photos" element={<PhotosList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;