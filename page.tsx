'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [poem, setPoem] = useState(null);
  const [news, setNews] = useState(null);
  const [song, setSong] = useState(null);
  const [art, setArt] = useState(null);

  useEffect(() => {
    fetch('/api/poem').then(res => res.json()).then(setPoem);
    fetch('/api/news').then(res => res.json()).then(setNews);
    fetch('/api/song').then(res => res.json()).then(setSong);
    fetch('/api/art').then(res => res.json()).then(setArt);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Georgia, serif' }}>
      <h1>Welcome to Bradbury Reader!</h1>

      <section>
        <h2>Poem</h2>
        {poem ? (
          <div>
            <h3>{poem.title}</h3>
            <p><em>by {poem.author}</em></p>
            <pre>{poem.lines?.join('\n')}</pre>
          </div>
        ) : <p>Loading poem...</p>}
      </section>

      <section>
        <h2>News</h2>
        {news ? (
          <div>
            <a href={news.url} target="_blank" rel="noreferrer">
              {news.title}
            </a>
            <p><small>Source: {news.source}</small></p>
          </div>
        ) : <p>Loading news...</p>}
      </section>

      <section>
        <h2>Song</h2>
        {song ? (
          <div>
            <p><strong>{song.title}</strong> by {song.artist}</p>
            <audio controls src={song.previewUrl}></audio>
          </div>
        ) : <p>Loading song...</p>}
      </section>

      <section>
        <h2>Artwork</h2>
        {art ? (
          <div>
            <img src={art.image} alt={art.title} style={{ maxWidth: '100%', borderRadius: '12px' }} />
            <p>{art.title} by {art.artist}</p>
          </div>
        ) : <p>Loading artwork...</p>}
      </section>
    </main>
  );
}


