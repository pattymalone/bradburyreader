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
    <section>
      <h2>Artwork of the Day</h2>
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
      />
      <p><em>{artwork.title}</em> by {artwork.artist}</p>
    </section>
  );
}
