import { useEffect, useState } from 'react';

export default function Song() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch('/api/song')
      .then(res => res.json())
      .then(data => setSong(data))
      .catch(console.error);
  }, []);

  if (!song) return <p>Loading song...</p>;

  return (
    <section>
      <h2>Song of the Day</h2>
      <p><strong>{song.title}</strong> by {song.artist}</p>
      <audio controls src={song.url}>
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
