import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function AlbumsList() {
  const location = useLocation();
  const {userId} = useParams();
  const [albums, setAlbums] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <a href={`${location.pathname}/${album.id}/photos`}>
              <button>Photos</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default AlbumsList;