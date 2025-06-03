import { useEffect, useState } from 'react';

export default function Poem() {
  const [poem, setPoem] = useState(null);

  useEffect(() => {
    fetch('/api/poem')
      .then(res => res.json())
      .then(data => setPoem(data))
      .catch(console.error);
  }, []);

  if (!poem) return <p>Loading poem...</p>;

  return (
    <section>
      <h2>Poem of the Day</h2>
      <h3>{poem.title}</h3>
      <pre>{poem.content}</pre>
      <p><em>— {poem.author}</em></p>
    </section>
  );
}
