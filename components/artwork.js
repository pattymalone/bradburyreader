import { useEffect, useState } from 'react';

export default function Artwork() {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    fetch('/api/artwork')
      .then(res => res.json())
      .then(data => setArtwork(data))
      .catch(console.error);
  }, []);

  if (!artwork) return <p>Loading artwork...</p>;

  return (
    <section style={{ padding: '1rem 0', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ fontSize: '1.5rem' }}>🎨 Artwork of the Day</h2>
      <img
        src={artwork.url}
        alt={artwork.title}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
      />
      <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
        {artwork.title} by {artwork.artist}
      </p>
    </section>
  );
}

