import { useEffect, useState } from 'react';

export default function Artwork() {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    fetch('/api/artwork')
      .then((res) => res.json())
      .then((data) => setArtwork(data))
      .catch((error) => {
        console.error('Failed to fetch artwork:', error);
        setArtwork({ title: "Failed to load artwork", artist: "", imageUrl: "" });
      });
  }, []);

  if (!artwork) {
    return <p>Loading artwork...</p>;
  }

  if (!artwork.imageUrl) {
    return (
      <section>
        <h2>Artwork of the Day</h2>
        <p><em>{artwork.title}</em> {artwork.artist && `by ${artwork.artist}`}</p>
        <p>No image available</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Artwork of the Day</h2>
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '12px' }}
      />
      <p><em>{artwork.title}</em> by {artwork.artist}</p>
    </section>
  );
}
